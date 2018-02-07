<template>
	<div>
		<div>{{title}}</div>
		<img src="imageUrl">
		<div>{{explanation}}</div>
	</div>
</template>

<script>
import "vue-resource"

console.log(this.$http);

export default {
  	name: 'HelloWorld',
  	data () {
		return {
			title: 'default',
			imageUrl: 'deafult',
			explanation: 'default'
		}
  	},
	created(){
	  	this.getDailyInfo();
	  	console.log("reday");
	},	
	methods:{
		getDailyInfo(){
			console.log(this.$http);
			this.$http.get('https://api.nasa.gov/planetary/apod?api_key=XK69v1f4Xfl0xGtE7SCEpYuw5zYPcNTzkI2AI23q')
				.then(function(res){
					console.log(res);
					this.title = res.title;
					this.imageUrl = res.url;
					this.explanation = res.explanation;
				});
		}
	}
}
</script>

