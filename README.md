Trailing Slash - JavaScript version
=================
Ensures that a trailing slash is on the passed url

###Usage Examples
fix all urls on the current with jQuery
	
	$(window).on("load", function(){
		$('a').each(function(){
			$(this).attr('href', cleanurl($(this).attr('href')));
		});
	});
	