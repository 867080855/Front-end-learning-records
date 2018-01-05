<template>
  <div id="app">
    <v-header :seller="seller"></v-header>

    <v-shopcart></v-shopcart>
  </div>
</template>

<script>
import data from './common/json/data.json';
import Header from './components/header/header.vue'
import shopcart from './components/shopcart/shopcart.vue';

import {urlParse} from './common/js/util';

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
</style>
