var _url = {};
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
_url.parse = function(url){
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
};


/*
 * Clean URL
 * ---
	purpose: 
		to ensure all urls are absolute urls with a trailing slash where needed
		
	input:
		1. (string): url 
		2. (object): 
			- ignore: (array) any domains to ignore
			
	output:
		successful: (string) full url
		unsuccessful: (int) -1
 */
_url.clean = function(url, o){
	/* ensure url is passed */
	if (url){
	
		/* init options */
		o = (typeof o == "undefined") ? {} : o;
		o.ignore = (typeof o.ignore == "undefined") ? [] : o.ignore;
	
		/* init variables and url structure via JS create element */
		var parsed = {},
			ignore = 0,
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
	
		/* set ignore flag if current domain is to be ignored */
		for (var i = 0; i < o.ignore.length; i++){
			if (parsed.domain.indexOf( o.ignore[i] ) != -1)
				ignore = 1;
	
			/* break from loop once flag is set */
			if (ignore) break;
		}
	
		/* add trailing slash */
		parsed.path = (!ignore && parsed.path.length > 1 && parsed.path.indexOf('.') == -1) ? parsed.path + '/' : parsed.path;
	
		/* set final url to be return */
		parsed.fullURL = parsed.protocol + '//' + parsed.domain + parsed.path + parsed.query + parsed.hash;
	
		return parsed.fullURL;
	}

	/* return -1 when a url isn't passed into the function */
	else {
		return -1;	
	}
};

/*
 * Replace all DOM URLs
 * ---
	purpose: 
		replace all the urls on the DOM with absolute urls
		
	input: (void)
	output:
		successful: (int) 1
		unsuccessful: (int) -1
 */
_url.replaceDOM = function(){
	var all = document.getElementsByTagName("a");
	
};