<template>
    <div class="shopcart">
        <div class="cart-left">
            <!-- 购物车图标及商品数量 -->
            <div class="logo-wrapper">
                <div class="logo">
                    <i class="iconfont icon-gouwuche"></i>
                </div>
                <div class="num">{{totalCount}}</div>
            </div>
            <!-- 商品总价 -->
            <div class="price">￥{{totalPrice}}</div>
        </div>
        <div class="cart-middle">另需配送费￥{{deliveryPrice}}</div>
        <div class="cart-right">还差￥{{restPrice}}起送</div>
    </div>
</template>

<script>
export default {
    name: 'shopcart',
    data(){
        return {
            totalCount: 99,
            totalPrice: 20,
            deliveryPrice: 4,
            restPrice: 20
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "./shopcart.styl"
</style>

