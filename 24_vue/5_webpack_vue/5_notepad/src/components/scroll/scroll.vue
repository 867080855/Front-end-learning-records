<template>
    <div class="scroll" ref="Scroll">
        <div class="scroll-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
    name: 'Scroll',
    mounted(){
        this.$nextTick(()=>{
            this.cardScroll = new BScroll(this.$refs.Scroll,{
                click: true
            });
        });
    }
}
</script>

<style lang="stylus" scoped>
    @import "./scroll.styl"
</style>


