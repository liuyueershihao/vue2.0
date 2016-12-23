<template lang="html">

<div class="weui-tabbar">
    <a href="javascript:;" class="weui-tabbar__item" :class="{' weui-bar__item_on': index === 0}">
        <img src="../assets/images/logo.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">test</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item" :class="{' weui-bar__item_on': index === 1}">
        <img src="../assets/images/logo.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">hello</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item" :class="{' weui-bar__item_on': index === 2}">
        <img src="../assets/images/logo.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">world</p>
    </a>
    <a href="javascript:;" class="weui-tabbar__item" :class="{' weui-bar__item_on': index === 3}">
        <img src="../assets/images/logo.png" alt="" class="weui-tabbar__icon">
        <p class="weui-tabbar__label">vue</p>
    </a>
</div>

</template>
<script>
export default {
    props: ['index'],
    // computed: {
    //     index: function () {
    //         return this.index || 0
    //     }
    // },
    mounted () {
        console.log(this.index === 1)
    }
}
</script>
