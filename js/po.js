


$(document).ready(function(){
	//点击开始流星动画
	$(".pop_ready").one("click",function(){
		pop_run();
		starmove();
		setTimeout('$(".star").addClass("starclick_cl");',10);
		setTimeout('$(".star").removeClass("starclick_cl");',350);
	})

})

//星星飞行过场控制，点击流星随机移动
function pop_run(){
	$(".pop_ready").addClass("pop_run")
	$(".star").click(function() {
		$(".star").removeClass("starclick_cl");
		setTimeout('$(".star").addClass("starclick_cl");',10);
		setTimeout('$(".star").removeClass("starclick_cl");',350);
		starmove();	
		

	});

	//动画运行中点击过星星1次就进行判断是否抽中；
	$(".star").one("click",function(){
		p_pRoll();
	})

	//星星最后复位延迟
	setTimeout('starReset()',8500);

}


// 2位数随机生成
function randomNo(){
	var r = Math.random().toFixed(2) * 100;
	if ( r > 1 && r<100 ) {
		return (r + 50 - 100) * 2.5 + '%';
	}else{
		randomNo();
	}
}

//星星随机移动函数
function starmove(){
	$(".star").css(
	'-webkit-transform','translate(' + randomNo() + ',' + randomNo() + ')')
}

// 如果有点过星星就显示中奖
function p_pRoll() {
	 w = true;
	//此处控制w为中奖
	if ( w ) {
		$(".pop_stage").addClass("pop_get");
	}else{
		$(".pop_stage").removeClass("pop_get");
	}

}

//星星复位
function starReset(){
	$(".star").css('-webkit-transform','translate(0%,0%)');
	//清除流星点击监听；
	$('.star').unbind('click');
}

