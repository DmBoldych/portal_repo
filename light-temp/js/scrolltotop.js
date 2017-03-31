
		$(document).ready(function(){
			var limit = $(window).height()/2;
			$("#back-to-top").hide();
			
			$(function () {
				$(window).scroll(function () {
					if ($(this).scrollTop() > limit) {
						$('#back-to-top').fadeIn();
					} else {
						$('#back-to-top').fadeOut();
					}
				});

				// scroll body to 0px on click
				$('#back-to-top i').click(function () {
					$('body,html').animate({
						scrollTop: 0
					}, 1500);
					return false;
				});
			});

		});
