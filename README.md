# vue2.0
vue2.0+webpack+vue-router+vue-resource-weui

用vue做框架，选了weui作为css库。由于weui是个纯css库，不含js功能，一些需要js配合的功能在[github文档](https://github.com/weui/weui)未做充分说明，所以也不知道怎么用。

在weui的基础上，我用weui扩展了一些适合于vue的基本组件，并简化了他们的使用(好像weui也有js版本的，叫做[weui.js](https://github.com/weui/weui.js),但是好像现在还是1.0.0alpha版本，所以也就没采用)

一下是我扩展的基本内容:
1. alert组件
        // text: 需要显示的提示信息，
        // fn: 点击确定后需要执行的函数
        this.alert(text, fn)

2. loading组件
        // boolean: loading组件需要一个布尔值作为唯一参数
        this.loading(boolean)

3. confirm组件
        // text: 需要显示的提示信息
        // cancelFn: 取消时执行的操作
        // ensureFn: 确定时执行的操作
        this.confirm(text, cancelFn, ensureFn)
4. toast组件

        //text: 需要显示的提示信息
        this.toast(text)

5. picker组件

        // picker逐渐需要传入一个对象，对象中必须包含data，onChange和onClose是非必须参数
        // 在onChange和onClose函数中可以用this.tempIndex表示当前被选中项的下标
        this.picker({
            data: data,
            onChange: fn,
            onClose: fn
        })
