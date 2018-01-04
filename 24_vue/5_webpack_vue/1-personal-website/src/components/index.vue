<template>
  <div id="temp1">{{msg}}</div>
</template>

<script>
export default {
  name: 'IndexTemp',
  data () {
    return {
      msg: 'This is a learning file'
    }
  }
}
</script>

<!-- 添加scoped属性来限制css生效的作用域 -->
<style scoped>
    #temp1 {
        background-color: aqua;
        height: 100px;
        line-height: 100px;
    }
</style>