<template>
<div>
    <!-- 顶部组件 -->
    <v-header :seller="seller"></v-header>


    <!-- 主体切换 —— 外在表现是一个tab栏-->
    <!-- 其内部分别绑定了三个跳转路由，分别跳转至 goods, rating, sellers页面
      因此一定不可以忘记去router/index.js 去注册路由 -->
    <div class="tab border-1px">
      	<div class="tab-item">
			<!-- 会生成一个相应的带有目标路径的 a 标签， 在vue1.0中的用法是<a v-link:"./link">Abour</a>  -->
        	<router-link v-bind:to="'/good'">商品</router-link>
      	</div>

        <div class="tab-item">
          <router-link to="/rating">评论</router-link>
        </div>

        <div class="tab-item">
          <router-link to="/shoper">商家</router-link>
        </div>
    </div>

	<!-- 路由跳转部分 -->
	<!-- keep-alive 可以把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染 -->
    <keep-alive>
    	<!-- 可以显示 goods, rating, sellers的内容 -->
      	<router-view :seller="seller"></router-view>
    </keep-alive>
</div>
</template>

<script>
// 导入数据及插件
import data from './common/json/data.json';
import {urlParse} from './common/js/util';

// 导入组件
import Header from './components/header/header.vue'
import shopcart from './components/shopcart/shopcart.vue';

// 导出
export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-shopcart': shopcart
  },
  data() {
    return {
      seller: {},
      id: (() => {
        let queryParam = urlParse();
        console.log(queryParam);
        return queryParam.id;
      })()
    };
  },
  created() {
//      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
//        response = response.body;
//        if (response.errno === ERR_OK) {
//          this.seller = response.data;
//          this.seller = Object.assign({}, this.seller, response.data);
//        }
//      });

    this.seller = data.seller;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*border: 1px solid rgba(7,17,27,0.1);*/
  border-1px(rgba(7, 17, 27, 0.1));
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }

  .tab .tab-item .active {
    color: rgb(240, 20, 20);
  }
</style>
