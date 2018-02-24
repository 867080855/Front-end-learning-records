<template>
    <div class="ratingselect">
        <!-- 评价分类 -->
        <div class="rating-type border-1px">
            <span class="block positive" @click="select(2,$event)" :class="{'active': selectType === 2}">
                {{desc.all}}
                <span class="count" >{{ratings.length}}</span>
            </span>
            <span class="block positive" @click="select(0,$event)" :class="{'active': selectType === 0}">
                {{desc.positive}}
                <span class="count">{{positives.length}}</span>    
            </span>
            <span class="block negative" @click="select(1,$event)" :class="{'active': selectType === 1}">
                {{desc.negative}}
                <span class="count">{{negatives.length}}</span>
            </span>
        </div>

        <!-- 只看有内容的评价 -->
        <div class="switch">
            <i class="iconfont icon-gou"></i>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
const ALL = 2
// 积极是 1，不积极是 0
const POSITIVE = 1
const NEGATIVE = 0


export default {
    name: 'ratingselect',
    props: {
        ratings: Array,
        desc: {
            type: Object,
            default(){
                return {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                }
            }
        },
        selectType: {
            type: Number,
            default: ALL
        }
    },
    computed: {
        positives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === POSITIVE;
            });
        },
        negatives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === NEGATIVE;
            });
        }
    },
    created(){
        this.$nextTick(()=>{
            console.log(this);
        });
    },
    methods: {
        select(type, event){
            // console.log(event); // mouseEvent

            // if(!event._constructed)
            //     return

            // alert('done')
            // this.selectType = type;
            // this.$emit('incrementTotal', 'selectType', type)
            // 子组件通过 $emit触发父组件的方法 increment   
                // 还可以传参   this.$emit('increment' ,this.counter);
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./ratingselect.styl"
</style>
