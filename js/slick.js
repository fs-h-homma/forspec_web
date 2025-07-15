var windowWidth = $(window).width();
if (windowWidth < 769) {
	initializeSlickResponsive();
} else {
	initializeSlick();
}

function initializeSlick() {
  $('.mainimg-slick').slick({
		autoplay: true,
		dots: false,				//丸いページナビボタンを表示
		arrows: false,			//左右の矢印
		autoplaySpeed: 2000,	//切り替えのスピード。デフォルトは3000。
		pauseOnHover: false,	//マウスオン時にスライドショーをストップするか。
		slidesToShow: 2,		//画面内に表示させる枚数。
		slidesToScroll: 1,	
		centerMode: true,
		centerPadding: '25%',
	});
	
}

function initializeSlickResponsive() {
  $('.mainimg-slick').slick({
		autoplay: true,
		dots: false,				//丸いページナビボタンを表示
		arrows: false,			//左右の矢印
		autoplaySpeed: 2000,	//切り替えのスピード。デフォルトは3000。
		pauseOnHover: false,	//マウスオン時にスライドショーをストップするか。
		slidesToShow: 1,		//画面内に表示させる枚数。
		slidesToScroll: 1,	
		centerMode: true,
		centerPadding: '25%',
	});
}

