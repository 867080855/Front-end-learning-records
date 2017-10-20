window.onload = function () {
	search();

	seckill();
}

// 头部搜索
function search(){
	var search = document.querySelector('.header');
	// console.log(search);

	var banner = document.querySelector('.carousel');
	// console.log(banner);

	var height = banner.offsetHeight;
	// console.log(height);

	window.onscroll = function () {
		var length = document.body.scrollTop;
		if(length > height){
			search.style.backgroundColor = 'rgba(201,21,35,0.85)';
		}else{
			// 获取header的阶段性透明度
			var rank = length / height * 0.85;
			// console.log(rank);
			search.style.backgroundColor = 'rgba(201,21,35,'+ rank +')';
		}
	}
}

// 秒杀(假定倒计时3小时)
function seckill(){
	// 拿到六个span
	var spans = document.querySelectorAll('.seckill .clock .num');
		// querySelector 是返回选中的数组的第一个元素
		// querySelectorAll 返回所有被选中的元素
	console.log(spans);

	var times = 3 * 60 * 60;
	var timer = setInterval(function(){
		times--;
		var h = Math.floor(times/(60 * 60));
		var m = Math.floor(times/60%60);
		var s = times%60;

		// console.log(h+'-'+m+'-'+s);

		spans[0].innerHTML = h>10? Math.floor(h/10): 0;
		spans[1].innerHTML = h%10;
		spans[2].innerHTML = m>10? Math.floor(m/10): 0;
		spans[3].innerHTML = m%10;
		spans[4].innerHTML = s>10? Math.floor(s/10): 0;
		spans[5].innerHTML = s%10;
	}, 1000)
}