<template>
    <div class="cartctrl">
        <span class="iconfont icon-jian" @click="substr($event)"></span>

        <span class="count" v-show="!show">{{count}}</span>
        <span class="count" v-show="show">{{selectCount}}</span>
        
        <span class="iconfont icon-jia" @click="add($event)"></span>
    </div>
</template>

<script>
export default {
    name: 'cartctrl',
    props: {
        food: {
            type: Object
        }
    },
    data(){
        return {
            // 将父元素传进来的值定义为局部变量避免污染
            foodPrivate: this.food,
            count: 0,
            selectCount: 0
        }
    },
    methods: {
        substr(event){
            this.count--;
            this.$emit('change', this.foodPrivate, event.target);
        },
        add(event){
            this.count++;
            this.$emit('change', this.foodPrivate, event.target);
            // event.target 表示点击的那个 div
        }
    },
    computed: {
        show(){
            for(var key in this.foodPrivate){
                if(key == 'count'){
                    console.log(key);
                    this.selectCount = this.foodPrivate[key];
                    return true;
                }
            }
            return false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./cartctrl.styl"
</style>
