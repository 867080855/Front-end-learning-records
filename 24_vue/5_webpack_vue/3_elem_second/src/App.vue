<template>
  	<div id="app">
		<!-- 顶部栏组件 -->
		<v-Header></v-Header>

		<!-- tab栏组件 -->
		<div class="tab">

		</div>

		<!-- 核心内容路由 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
  	</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

