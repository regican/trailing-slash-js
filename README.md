Trailing Slash - JavaScript version
=================
Ensures that a trailing slash is on the passed url

###Sample
function cleanurl(parameters):
   
	<script>
	var url = "https://github.com/regican";
		url = cleanurl(url);
   	</script>

input:  https://github.com/regican
output: https://github.com/regican/


###Method
function: **`cleanurl`**
parameters:
1. url that needs to be formatted correctly
2. options:
  * debug: true or false (only available on cleanurl.debug.js)
    * outputs in console log 
  * extension: extension of file to avoid formatting
    * default: '.php'


###Usage Examples
fix all urls on the current page with jQuery
	
	$(window).on("load", function(){
		$('a').each(function(){
			$(this).attr('href', cleanurl($(this).attr('href')));
		});
	});

