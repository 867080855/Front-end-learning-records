<template>
  <div id="app">
    <v-star></v-star>
    <v-split></v-split>
  </div>
</template>

<script>
import star from './components/star/star.vue';
import split from './components/split/split.vue';

export default {
  name: 'app',
  components: {
    'v-star': star,
    'v-split': split
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
