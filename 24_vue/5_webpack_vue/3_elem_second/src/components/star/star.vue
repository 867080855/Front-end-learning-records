<template>
    <div class="stars" :class="starType">
        <span class="star" v-for="item in items" :class="item"></span>
    </div>
</template>

<script>
const LENGTH = 5
// 此处的变量名不是随便起的，是和图片名称相匹配的
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'

export default {
    name: 'star',
    props: {
        score: Number,
        size: Number
    },
    data(){
        return {
            
        }
    },
    computed: {
        starType(){
            return 'star-' + this.size;
        },
        items(){
            let result = [];
            let score = this.score * 1;
            // true 是有小数
            let hasDecimal = score % 1 != 0;
            // 整数部分
            let integer = Math.floor(this.score);

            // 整数星星添加入数组
            for(let i = 1; i <= integer; i++)
                result.push(STAR_ON);
            // 小数星星视为半颗
            if(hasDecimal)
                result.push(STAR_HALF)
            
            while(result.length < LENGTH)
                result.push(STAR_OFF)
            // console.log(result);

            return result;
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    @import "./star.styl"
</style>


