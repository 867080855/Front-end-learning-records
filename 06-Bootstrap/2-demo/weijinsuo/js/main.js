$(function () {
	// 轮播图自适应函数
	function reLoadPic(){
		var clientWidth = $(window).width();
		var isSmallScreen = clientWidth <= 768;
		// console.log(isSmallScreen);
		$('#carousel > .carousel-inner > .item')
			.each(function (index,item) {
				var $item = $(item);
				var img_src = isSmallScreen? $item.data('img-xs'): $item.data('img-lg');
				// console.log(img_src);
				$item.css('background-image','url('+img_src+')');
					// 为了实现小图的等比变化，小图不再使用背景图而使用img的方式
				if(isSmallScreen){
					$item.html('<img src="'+ img_src +'" alt="" />')
				}else{
					$item.html('')
				}
				// 服务器端联网动态获取img的过程中，img会出现闪现现象，本地加载则无碍。
				// console.log("done");
			});;
	}
	$(window).on('resize',reLoadPic)
			.trigger('resize');

	// initialize toolTips
	$('[data-toggle="tooltip"]').tooltip()


	// control tag-width decides by device width
	function makeTinyUl(string){
		var $ul = $(string);
		var width = 0;
		var lis = $ul.children();
		console.log(string+':'+lis.length);
		for(var x = 0;x < lis.length; x++){
			width += lis[x].clientWidth;
		}
		console.log(string+':'+width);
		if(width > $(window).width()){
			$ul.css('width',width+20)
				.parent().css('overflowX','scroll');
		}
		/* beacuse the padding attribute is existing 
		already, so we add a fixed number to the ul width
			*/
		// console.log('done');
	}
	makeTinyUl('#production .nav-tabs');
	makeTinyUl('#friends ul')

	// whne you click the icon in #news the news-title can toggle
	$('#news .nav-pills a').on('click',function () {
		$('#news .news-title').html($(this).data('title'));
		// console.log('done')
	});

	// thumb the pic 
		var $carousel = $('.carousel');
		var clientX1 = 0;
		var clientX2 = 0;
		// get the direction which the thumb swipe
			// mobile terminals event:touchstart touchend touchover
		$carousel.on('touchstart',function (e) {
			// console.log(e);
			clientX1 = e.originalEvent.touches[0].clientX;
			// console.log(clientX1);
		});

		$carousel.on('touchmove',function (e) {
			clientX2 = e.originalEvent.touches[0].clientX;
			// console.log(clientX2);
		});


		$carousel.on('touchend',function (e) {
			var abs = Math.abs(clientX2 - clientX1);
			if(abs > 50){
				var result = clientX1 < clientX2? 'prev': 'next';
				// console.log(result);
				$(this).carousel(result);
			}
		});



		// select the pic decides by the direction 
			// carousel(next) 
			// carousel(prev)
		
		
});