// 横スライドタイプのサムネイルスライドショー
	$('.thumbnail-slide').slick({
		//autoplay: true,
		arrows: true,			//左右の矢印
		autoplaySpeed: 0,		//切り替えのスピード。今回は平均してなめらかに移動させるので0にする。
		speed: 7000,			//スライドのスピード
		// cssEase: 'linear',		//アニメーションのパターン。通常はこのままでOK。
		slidesToShow: 3,		//画面内に表示させる枚数。
		slidesToScroll: 1,		//１回でスライド移動する枚数。
		centerMode: true,
    centerPadding: '25%',
		
		//画面幅899px以下の設定
		responsive: [
		{
		breakpoint: 899,	//ブレイクポイント
		settings: {
		slidesToShow: 2,	//画面内に表示させる数。2枚。
		}
		}
		]
});
