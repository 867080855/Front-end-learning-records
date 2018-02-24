<template>
    <div class="cartctrl">
        <span class="iconfont icon-jian" v-show="food.count > 0" @click.stop.prevent="substr($event)"></span>

        <span class="count" v-show="food.count > 0">{{food.count}}</span>
        <!-- <span class="count" v-show="show">{{selectCount}}</span> -->
        
        <!-- @click.stop.prevent阻止默认事件 -->
        <span class="iconfont icon-jia" @click.stop.prevent="add($event)"></span>
    </div>
</template>

<script>
import Vue from "vue"


export default {
    name: 'cartctrl',
    // 如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态
    props: {
        food: {
            type: Object
        }
    },
    data(){
        return {}
    },
    methods: {
        substr(event){
            this.food.count--;
        },
        add(event){
            if (!this.food.count) {
                Vue.set(this.food, 'count', 1);
            } else {
                this.food.count++;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./cartctrl.styl"
</style>
