//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header__burger');
		var headerLang=$('.header__language');
	if(w<767.98){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header__top'));
		}
	}


	
	if(w<767.98){
		if(!$('.menu__nav').hasClass('done')){
			$('.menu__nav').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.menu__nav'), function(index, val) {
			if($(this).hasClass('menu__nav_right')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.menu').eq(2));
				}
			}else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.menu').eq(0));
				}
			}
		});
	}
}

function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();

