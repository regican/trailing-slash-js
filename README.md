Trailing Slash - JavaScript version
=================
Ensures that a trailing slash is on the passed url

###Installation
1. copy js file to your js directory
   `<script src="clean.js"></script>`
	
2. call the function cleanurl(parameters);
   `<script>cleanurl("https://github.com/regican")</script>`

   input:  https://github.com/regican
   output: https://github.com/regican/


###Documentation
function: **`cleanurl`**
parameters:
1. url that needs to be formatted correctly
2. options:
  * debug: true or false (only available on clean.debug.js)
    * outputs in console log 
  * extension: extension of file to avoid formating
    * default: '.php'


###Usage Examples
fix all urls on the current page with jQuery
	
	$(window).on("load", function(){
		$('a').each(function(){
			$(this).attr('href', cleanurl($(this).attr('href')));
		});
	});

