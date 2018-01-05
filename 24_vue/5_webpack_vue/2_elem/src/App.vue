<template>
  <div id="app">
    <v-star></v-star>
    <v-split></v-split>
    <v-shopcart></v-shopcart>
  </div>
</template>

<script>
import data from './common/json/data.json';
import star from './components/star/star.vue';
import split from './components/split/split.vue';
import shopcart from './components/shopcart/shopcart.vue';

export default {
  name: 'app',
  components: {
    'v-star': star,
    'v-split': split,
    'v-shopcart': shopcart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
