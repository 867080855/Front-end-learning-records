<template>
    <div>
        <div class="shopcart" @click="showList()">
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
            <div class="cart-right" :class="payClass" @click="payFee">{{restPrice}}</div>
            <transition name="fade">
                <div class="shopcart-list" v-show="listShow">
                    <div class="title clearfix">购物车<span class="empty" @click="empty">清空</span></div>
                    <div class="list-content" ref="listContent">
                        <ul>
                            <li class="item" v-for="item in selectFoods">
                                <div class="name">{{item.name}}</div>
                                <div class="price clearfix">￥{{item.price * item.count}}</div>
                                <v-cartctrl class="cartctrl" :food="item"></v-cartctrl>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <div class="mask" v-show="listShow" @click="hideList()"></div>
        </transition>
    </div>
</template>

<script>
import BScroll from "better-scroll"
import cartctrl from "../cartctrl/cartctrl.vue"

export default {
    name: 'shopcart',
    props: {
        selectFoods: {
            type: Array,
            // 返回值也必须是函数形式返回
            default(){
                return [
                    {name: '饭1',price: 10,count:2},
                    {name: '饭2',price: 20,count:3},
                    {name: '饭3',price: 30,count:1},
                    {name: '饭4',price: 40,count:4},
                    {name: '饭5',price: 50,count:5},
                    {name: '饭6',price: 40,count:4},
                    {name: '饭7',price: 30,count:3},
                    {name: '饭8',price: 20,count:2},
                ]
            } 
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        // 可以配送的最低价格
        minPrice: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            fold:  true 
            // fold:  false
        }
    },
    methods: {
        showList(){
            this.fold = false;
        },
        hideList(){
            this.fold = true;
            // this.listShow = false;   // error, 没有 setter
        },
        payFee(){
            if(this.totalPrice >= this.minPrice)
                alert(`您需要支付${this.totalPrice}元`);
        },
        empty(){
            this.selectFoods.forEach((food)=>{
                food.count = 0;
            });
        }
    },
    computed: {
        totalPrice(){
            let total = 0;
            this.selectFoods.forEach((food)=>{
                total += food.price * food.count;
            });
            return total;
        },
        totalCount(){
            let count = 0;
            this.selectFoods.forEach((food)=>{
                count += food.count;
            });
            return count;
        },
        restPrice(){
            if(this.totalPrice == 0)
                return `还差￥${this.minPrice}元起送`;
            else if(this.totalPrice < this.minPrice)
                return `还差￥${this.minPrice - this.totalPrice}元起送`
            else 
                return `去结算`;
        },
        // 修改支付按钮的类名
        payClass(){
            if(this.totalPrice < this.minPrice)
                return 'not-enough'
            else 
                return 'enough'
        },
        listShow(){
            // 如果没有商品，则不显示已挑选的全部列表
            if(!this.totalCount){
                this.fold = true;
                return false;
                // 如果 fold 是true说明，列表不显示，所有listShow等于false
            }
            
            // 如果 fold属性是 false，说明需要显示列表了
            if(!this.fold){
                this.$nextTick(()=>{
                    if(!this.cartScroll){
                        this.cartScroll = new BScroll(this.$refs.listContent,{
                            click: true
                        });
                    }else
                        this.cartScroll.refresh();
                });
                return true;
            }
                

            return !this.fold;
        }
    },
    components: {
        'v-cartctrl': cartctrl
    }
}
</script>

<style lang="stylus" scoped>
    @import "./shopcart.styl"
</style>

