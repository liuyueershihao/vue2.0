<style lang='scss' $scpoed>
#picker{
    font-size: 16px;
}

</style>
<template lang="html">
    <div id='picker' v-if='showData'>
        <div class="weui-mask" @click="cancelFun"></div>
        <div class="weui-picker">
            <div class="weui-picker__hd">
                <a href="javascript:;" data-action="cancel" class="weui-picker__action" @click="cancelFun">取消</a>
                <a href="javascript:;" data-action="select" class="weui-picker__action" @click='ensureFun'>确定</a>
            </div>
            <div class="weui-picker__bd">
                <div class="weui-picker__group">
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content">
                        <div class="weui-picker__item" v-for='data in dataList'>{{data.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // props: ['dataList', 'hasChanged'],
    props: ['obj'],
    data () {
        return {
            showData: true,
            dataList: this.obj.data || {},
            onChange: this.obj.onChange || function () {},
            onClose: this.obj.onClose || function () {},
            tempIndex: null, // 未关闭picker而重新启用滑动时index的缓存
            offset: 3, // 列表初始化时的偏移量（列表初始化时，选项是聚焦在中间的，通过offset强制往上挪3项，以达到初始选项是为顶部的那项）
            rowHeight: 34, // 列表每一行的高度
            $scrollable: null, // .weui-picker__content 滚动的元素
            bodyHeight: 7 * 34 // picker的高度,用于辅助点击滚动的计算
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.$scrollable = document.getElementsByClassName('weui-picker__content')[0]
            this.show()
            this.scrollFun()
        })
    },
    methods: {
        setTransition: function ($picker, time) {
            $picker.style.transition = 'all ' + time + 's'
            $picker.style['-webkie-transition'] = 'all ' + time + 's'
        },
        setTranslate: function ($picker, diff) {
            $picker.style.transform = 'translate3d(0, ' + diff + 'px, 0)'
            $picker.style['-webkit-transform'] = 'translate3d(0, ' + diff + 'px, 0)'
        },
        /**
         * [获取初始化index,如果index刚好为disabled则重新计算]
         * @param  {[array]} items [数据]
         * @return {[number]}       [index]
         */
        getDefaultIndex: function (items) {
            let _current = Math.floor(items.length / 2)
            let _count = 0
            while (!!items[_current] && items[_current].disabled) {
                _current = ++_current % items.length
                _count++
                if (_count > items.length) {
                    throw new Error('no selectable item.')
                }
            }
            return _current
        },
        getDefaultTranslate: function (offset, rowHeight, items) {
            let _currentIndex = this.getDefaultIndex(items)
            return (offset - _currentIndex) * rowHeight
        },
        getMax: function (offset, rowHeight) {
            return offset * rowHeight
        },
        getMin: function (offset, rowHeight, length) {
            return -(rowHeight * (length - offset - 1))
        },
        stop: function (translate, diff) {
            translate += diff
            // 移动到最接近的那一行
            translate = Math.round(translate / this.rowHeight) * this.rowHeight
            let _max = this.getMax(this.offset, this.rowHeight)
            let _min = this.getMin(this.offset, this.rowHeight, this.dataList.length)
            // 不要超过最大值或者最小值
            if (translate > _max) {
                translate = _max
            }
            if (translate < _min) {
                translate = _min
            }
            // 如果是disable就跳过
            let _index = this.offset - translate / this.rowHeight
            while (!!this.dataList[_index] && this.dataList[_index].disabled) {
                diff > 0 ? ++_index : --_index
            }
            translate = (this.offset - _index) * this.rowHeight
            // 在tempIndex被重新赋值之前，其表现为上了一轮stop的值，即为oldIndex
            if (this.tempIndex !== _index) {
                this.change()
            }
            // 缓存tempIndex
            this.tempIndex = _index
            this.setTransition(this.$scrollable, 0.3)
            this.setTranslate(this.$scrollable, translate)
        },
        scrollFun: function () {
            console.log('scrollFun')
            let self = this
            let _startY = void 0
            let _endY = void 0
            let _startTime = void 0
            let _translate = void 0 // 缓存translate
            let _points = [] // 记录移动点
            let _windowHeight = window.innerHeight // 屏幕的高度
            // 首次触发选中事件
            // 如果有缓存的选项，则用缓存的选项，否则使用中间值
            // if (this.tempIndex !== null && this.tempIndex < this.dataList.length) {
            //     console.log('this.tempIndex has value')
            //     let _index = this.tempIndex
            //     _translate = (this.offset - _index) * this.rowHeight
            // } else {
            //     console.log('this.tempIndex dont has value')
            //     // let _index = this.getDefaultIndex(this.dataList)
            //     _translate = this.getDefaultTranslate(this.offset, this.rowHeight, this.dataList)
            // }
            _translate = this.getDefaultTranslate(this.offset, this.rowHeight, this.dataList)
            this.setTranslate(this.$scrollable, _translate)
            let scrollStart = function (_e) {
                _startY = _e.changedTouches[0].pageY
                _startTime = new Date().getTime()
                if (self.tempIndex !== null && self.tempIndex < self.dataList.length) {
                    let _index = self.tempIndex
                    _translate = (self.offset - _index) * self.rowHeight
                }
            }
            let scrollMove = function (_e) {
                _endY = _e.changedTouches[0].pageY
                let _diff = _endY - _startY
                self.stop(_translate, _diff)
                // self.setTransition(self.$scrollable, 0.3)
                // self.setTranslate(self.$scrollable, _translate + _diff)
                _startTime = new Date().getTime()
                _points.push({time: _startTime, y: _endY})
                if (_points.length > 40) {
                    _points.shift()
                }
                _e.preventDefault()
            }
            let scrollEnd = function (_e) {
                let _endTime = new Date().getTime()
                _endY = _e.changedTouches[0].pageY
                let _relativeY = _windowHeight - self.bodyHeight / 2
                // 如果上次时间距离松开手的时间超过 100ms，则停止了，没有惯性滑动
                if (_endTime - _startTime > 100) {
                    // 如果end和start相差小于10，则视为
                    if (Math.abs(_endY - _startY) > 10) {
                        self.stop(_translate, _endY - _startY)
                    } else {
                        self.stop(_translate, _relativeY - _endY)
                    }
                } else {
                    if (Math.abs(_endY - _startY) > 10) {
                        let _endPos = _points.length - 1
                        let _startPos = _endPos
                        for (let i = _endPos; i > 0 && _startTime - _points[i].time < 100; i--) {
                            _startPos = i
                        }
                        if (_startPos !== _endPos) {
                            let _eq = _points[_endPos]
                            let _sp = _points[_startPos]
                            let _t = _eq.time - _sp.time
                            let _s = _eq.y - _sp.y
                            let _v = _s / _t // 出手时的速度
                            let _diff = (_v--) * 150 + (_endY - _startY) // 滑行150ms，这里直接影响‘灵敏度’
                            self.stop(_translate, _diff)
                        } else {
                            self.stop(_translate, 0)
                        }
                    } else {
                        self.stop(_translate, _relativeY - _endY)
                    }
                }
            }
            let scrollable = document.getElementsByClassName('weui-picker__group')[0]
            scrollable.addEventListener('touchstart', scrollStart, false)
            scrollable.addEventListener('touchmove', scrollMove, false)
            scrollable.addEventListener('touchend', scrollEnd, false)
        },
        change: function () {
            this.onChange()
        },
        show: function () {
            let mask = document.getElementsByClassName('weui-mask')[0]
            let picker = document.getElementsByClassName('weui-picker')[0]
            mask.className += ' weui-animate-fade-in'
            picker.className += ' weui-animate-slide-up'
        },
        hide: function () {
            this.onClose()
            let mask = document.getElementsByClassName('weui-mask')[0]
            let picker = document.getElementsByClassName('weui-picker')[0]
            mask.className = this.classNameFun(mask.className, 'weui-animate-fade-out')
            picker.className = this.classNameFun(picker.className, 'weui-animate-slide-down')
            setTimeout(() => {
                this.showData = false
            }, 700)
        },
        classNameFun: function (className, classStr) {
            let arr = className.split(' ')
            arr.pop()
            arr.push(classStr)
            return arr[0] + ' ' + arr[1]
        },
        cancelFun: function () {
            this.hide()
        },
        ensureFun: function () {
            this.hide()
        }
    }
}
</script>
