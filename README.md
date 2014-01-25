Add Trailing Slash - JavaScript version
=================
Ensures that a trailing slash is on the passed url. Supports urls with extensions, query string and hash tags. 

###Sample Usage
**basic use**
function cleanurl(parameters):
   
	<script>
	var url = "https://github.com/regican";
		url = cleanurl(url);
		
		//now url has a trialing slash
   	</script>

input:  https://github.com/regican
output: https://github.com/regican/

**fix all urls on the current page with jQuery**

	$(window).on("load", function(){
		$('a').each(function(){
			$(this).attr('href', cleanurl($(this).attr('href')));
		});
	});


###Method
function: **`cleanurl`**
parameters:
1. (string) url that needs to be formatted correctly
2. (object) options
  * debug (boolean): true or false - _only available on cleanurl.debug.js_
    * outputs in console log 
  * extension (string): extension of file to avoid formatting
    * default: '.php'

