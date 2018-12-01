(function autoSlider(){
		$(".slider .active").each(function(){
			if(!$(this).is(":last-child")){
				$(this).delay(6000).fadeOut(3000 , function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoSlider();
				});
			}else {
				$(this).delay(6000).fadeOut(3000, function(){
					$(this).removeClass("active");
					$(".slider article").eq(0).addClass("active").fadeIn();
					autoSlider();
				});
			}
		});
	}());