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
					<div v-for="item in itemsGeted">
						<!-- 创建一个父目录 如 New 及多个子目录 如 markdown，涂鸦... -->
						<v-listitem :item="item" @clicked="functionTrigger"></v-listitem>
					</div>
				</div>
			</transition>
		</div>


		<transition name="mask">
			<v-masker v-show="maskShow" class="mask" @click="toggleMask" >
				<v-writter></v-writter>
			</v-masker>
		</transition>
	</div>
</template>


<script>
// 转化为本地存储数据
import items from "../../common/data/items.json"
localStorage.setItem('itemsPrivate', JSON.stringify(items));

import listItem from "../listitem/listitem.vue"
import writter from '../writer/writer.vue'
import Masker from "../mask/mask.vue"

export default {
	name: 'top',
	data(){
		return {
			maskShow: false,	// 显示遮罩层的flag
			listShow: false,	// 显示列表框的flag
			itemsGeted: []
		}
	},
	created(){
		this.itemsGeted = JSON.parse(localStorage.getItem('itemsPrivate')).data;
	},
	methods: {
		toggleList(){
			this.listShow = !this.listShow;
		},
		toggleMask(){
			this.maskShow = !this.maskShow;
		},
		functionTrigger(obj, func){
			// console.log(obj);	// markdown/涂鸦

			if(obj.name === this.itemsGeted[0].name){
				if(func == 'Markdown'){
					this.toggleMask();
					newPage(obj);
				}else if(func == '涂鸦'){
					alert('尚不支持，客官稍后呐...');
				}
			}else{
				// 尚未开始书写
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
		'v-writter': writter,
		'v-masker': Masker
	}
}
</script>

<style lang="stylus" scoped>
	@import "./top.styl"
</style>

