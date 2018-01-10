<template>
	<div>
		<div class="top">
			<div class="left"></div>
			<div class="title">Notepad</div>
			<div class="right">
				<i class="fa fa-list" @click="toggleList"></i>
				<!-- <i class="fa fa-list" @click="toggleMask"></i> -->
			</div>

			<!-- 
				<transition-group> 元素作为多个元素/组件的过渡效果
				<transition> 元素作为单个元素/组件的过渡效果
			-->
			<transition name="fade">
				<div class="container" v-show="listShow">
					<div v-for="item in items">
						<v-listitem  :item="item"></v-listitem>
					</div>
				</div>
			</transition>
		</div>


		<transition name="fade">
			<div v-show="maskShow" class="mask" @click="toggleMask"></div>
		</transition>
	</div>
</template>


<script>
import listItem from "../listitem/listitem.vue"
import items from "../../common/data/items.json"

export default {
	name: 'top',
	data(){
		return {
			maskShow: false,
			listShow: false
		}
	},
	created(){
		this.items = items.data;
		console.log(this.items);
	},
	methods: {
		toggleList(){
			this.listShow = !this.listShow;
		},
		toggleMask(){
			this.maskShow = !this.maskShow;
		}
	},
	components: {
		'v-listitem': listItem
	}
}
</script>

<style lang="stylus" scoped>
	@import "./top.styl"
</style>

