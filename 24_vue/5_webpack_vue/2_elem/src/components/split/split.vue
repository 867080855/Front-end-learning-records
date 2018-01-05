<template>
  <div>{{content}}</div>
</template>

<script>
export default {
  name: 'split',
  data () {
    return {
      content: 'This is split page!'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "split.styl";
</style>