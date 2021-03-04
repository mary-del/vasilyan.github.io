$(document).ready(function(){
	$("body").on('mousewheel', function(){
		let e = $("#main_menu");
		let offs = e.offset();
		let y = offs.top;
		if(y>=300){
			$("#main_menu").css({
				backgroundColor:'rgb(99, 99, 99)'
			});
			$(".container-1").css({
				backgroundColor:'rgb(99, 99, 99)'
			});
		}else if(y<300){
			$("#main_menu").css({
				backgroundColor:'rgba(0,0,0,0)'
			});
			$(".container-1").css({
				backgroundColor:'rgba(0, 0, 0, 0)'
			});
		}
	});

	$(".menue").click(function(){
		$(".menue1").toggle(500);
	});
});