<template>
	<!-- <v-header>as</v-header> -->
	<div class="card">
		<div class="title">{{card.title}}</div>
		<div class="content">{{card.desc}}</div>
	</div>
</template>


<script>
// import {Header} from 'mint-ui'
// import Vue from 'vue's

export default {
	name: 'card',
	props: {
		card: {
			type: Object,
			default(){
				return {title: '标题', desc: '内容'}
			}
		}
	},
	data(){
		return {
			content: 'card content'
		}
	},
	components: {
		// 'v-header': Header
	}
}
</script>

<style lang="stylus" scoped>
	@import "./card.styl"
</style>
