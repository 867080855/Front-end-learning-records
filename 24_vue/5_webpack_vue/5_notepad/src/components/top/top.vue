<template>
	<div>
		<div class="top">
			<div class="left"></div>
			<div class="title">Notepad</div>
			<div class="right" @click="toggleList">
				<i class="fa fa-list"></i>
				<!-- <i class="fa fa-list" @click="toggleMask"></i> -->
			</div>

			<!-- 
				<transition-group> 元素作为多个元素/组件的过渡效果
				<transition> 元素作为单个元素/组件的过渡效果
			-->
			<transition name="fade">
				<div class="container" v-show="listShow" @changed="changed">
					<div v-for="item in items">
						<!-- 创建一个父目录 如 New 及多个子目录 如 markdown，涂鸦... -->
						<v-listitem :item="item" @clicked="functionTrigger"></v-listitem>
					</div>
				</div>
			</transition>
		</div>


		<transition name="mask">
			<div v-show="maskShow" class="mask" @click="toggleMask" >
				<v-writter></v-writter>
			</div>
		</transition>
	</div>
</template>


<script>
import items from "../../common/data/items.json"

import listItem from "../listitem/listitem.vue"
import writter from '../writer/writer.vue'

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
		// console.log(this.items);
	},
	methods: {
		toggleList(){
			this.listShow = !this.listShow;
		},
		toggleMask(){
			this.maskShow = !this.maskShow;
		},
		functionTrigger(obj){
			// console.log(obj);	// markdown/涂鸦
			this.toggleMask();

			if(obj.name === this.items[0].name){
				newPage(obj);
			}else{
				sort(obj);
			}
			function newPage(obj){
				// obj[] = ['Markdown', '涂鸦']
				obj.funcs.forEach((func)=>{
					
				});
			}
			function sort(){
				console.log('sort');
			}
		},
		changed(data){
			console.log(data);
		}
	},
	components: {
		'v-listitem': listItem,
		'v-writter': writter
	}
}
</script>

<style lang="stylus" scoped>
	@import "./top.styl"
</style>

