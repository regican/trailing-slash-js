if ( typeof parseurl != 'function' ) {

	/*
	 * Parse URL
	 * ---
	 	purpose: 
	 		break down a url into its different components
	 		
	 	input:
	 		1. (string): url
	 	output:
	 		successful: (object) 
	 			- protocol: 	https / http
	 			- domain: 		github.com
	 			- path: 		regican/
	 			- query: 		?serach=test&attempts=2
	 			- hash: 		#anchor
	 		unsuccessful: (int) -1
	 */
	function parseurl(url){
		/* ensure url is passed */
		if (url){
			/* init variables and url structure via JS create element */
			var parsed = {},
				url = (function(href){
					var a = document.createElement('a');
						a.href = href;
					return a;
				})(url);
		
			/* break down parsed url */
			parsed.protocol = url.protocol || '';
			parsed.domain 	= url.hostname || '';
			parsed.path 	= url.pathname || '';
			parsed.query	= url.search || '';
			parsed.hash 	= url.hash || '';
		
			return parsed;
		}
		
		/* return -1 when a url isn't passed into the function */
		else {
			return -1;
		}
	}
};