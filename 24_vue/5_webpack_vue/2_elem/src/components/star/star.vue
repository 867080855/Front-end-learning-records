<template>
  <div>{{content}}</div>
</template>

<script>
export default {
  name: 'star',
  data () {
    return {
      content: 'This is star page!'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "star.styl";
</style>