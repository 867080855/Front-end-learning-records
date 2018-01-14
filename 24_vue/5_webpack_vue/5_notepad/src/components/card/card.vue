<template>
	<!-- <v-header>as</v-header> -->
	<div class="card">
		<div class="title">{{cardPrivate.title}}</div>
		<div class="content">
			<v-scroll>
				<div v-html="compiledMarkdown"></div>
			</v-scroll>
		</div>
	</div>
</template>


<script>
import Scroll from "../scroll/scroll.vue"
import Marked from "marked"



export default {
	name: 'card',
	props: {
		card: {
			type: Object,
			default(){
				return {title: 'title', desc: 'desc'}
			}
		}
	},
	data(){
		return {
			cardPrivate: {},
			markedDesc: ''
		}
	},
	created(){
		this.cardPrivate = this.card;
	},
	computed: {
		compiledMarkdown(){
			// Synchronous highlighting with highlight.js

			return Marked(this.cardPrivate.desc,{
				highlight: function (code) {
					return require('highlight.js').highlightAuto(code).value;
				}
			})
		}
	},
	components: {
		'v-scroll': Scroll
	}
}
</script>

<style lang="stylus" scoped>
	@import "./card.styl"
</style>

<style>
	@import "./card.css"
</style>
