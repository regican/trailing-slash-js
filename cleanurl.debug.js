if ( typeof cleanurl != 'function' ) { 
function cleanurl(val, o){
	//get options
	if (typeof o == "undefined"){
		o = {
			debug: false,
			extension: '.php'
		};
	}else {
		if (typeof o.debug == "undefined"){
			o.debug = false;
		}
		if (typeof o.extension == "undefined"){
			o.extension = '.php';
		}
	}
	
	if (o.debug){
		console.log('cleanup (');
		console.log(' - input: '+typeof val + ' ' + val + ', {debug:"'+o.debug+'",extension:"'+o.extension+'"}');
	}
	//for small hrefs
	if (val.length < 4) return val;
	
	//format input
	var val = val.replace(/(\s)+$/, ""), //remove any trailing whitespaces
		regex = new RegExp("^(https:\\/\\/|http:\\/\\/|\\/\\/|\\/)(.+?)\\/(.*?(\\?|$|#)|\\" + o.extension + ")(.*$)", "i");
	var url = val.match(regex);
	if (!url){
		url = val.match(/^(https:\/\/|http:\/\/|\/\/|\/)(.*$)/i) || false;	
	}
		
	if (url){
		var newURL = '',
			parsed = [];
		
		//break down matched url parts
		parsed.protocol = url[1] || '';
		
		parsed.domain = url[2] || '';
		parsed.domain = parsed.domain.replace(/\/+$/, ""); //remove trailing slash
		
		parsed.path = url[3] || '';
		parsed.ext = url[4] || '?';
		
		parsed.path = parsed.path.replace(parsed.ext,"");
		parsed.path = parsed.path.replace(/\/+$/, ""); //remove trailing slash
		parsed.path = parsed.path.replace(/^\//, ""); //remove starting slash
		
		parsed.query = url[5] || false;
		
		console.log(parsed);
		
		//set first part of return url
		newURL = parsed.protocol + parsed.domain + '/' + parsed.path;
		
		//add a trailing slash only if the url is not an actual file with an extension
		newURL += ((parsed.path != "" && parsed.path.indexOf( o.extension ) == -1) ? '/' : '');
		
		//append uri query onto url
		if (parsed.query){
			newURL += parsed.ext+parsed.query;
		}
		
		if (o.debug){
			console.log(' - output: '+newURL);
			console.log(');');
		}
		
		return newURL;
	}else {
		return val;	
	}
}
};