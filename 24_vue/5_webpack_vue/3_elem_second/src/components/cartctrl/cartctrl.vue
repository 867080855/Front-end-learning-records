<template>
    <div class="cartctrl">
        <span class="iconfont icon-jian" @click="substr($event)"></span>
        <span class="count">{{countPrivate}}</span>
        <span class="iconfont icon-jia" @click="add($event)"></span>
    </div>
</template>

<script>
export default {
    name: 'cartctrl',
    props: {
        count: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            // 将父元素传进来的值定义为局部变量避免污染
            countPrivate: this.count
        }
    },
    methods: {
        substr(event){
            this.countPrivate--;
            this.$emit('change', this.countPrivate, event.target);
        },
        add(event){
            this.countPrivate++;
            this.$emit('change', this.countPrivate, event.target);
            // event.target 表示点击的那个 div
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./cartctrl.styl"
</style>
