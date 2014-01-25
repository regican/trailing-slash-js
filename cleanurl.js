if ( typeof cleanurl != 'function' ) { 
function cleanurl(val){
	if (val.length < 4) return val;
	var val = val.replace(/(\s)+$/, ""); //remove any trailing whitespaces
	var url = val.match(/^(https:\/\/|http:\/\/|\/\/|\/)(.+?\/|.*)(.*?(\?|\z)|\.php)(.*$)/i) || false;
	
	if (!url){
		url = val.match(/^(https:\/\/|http:\/\/|\/\/|\/)(.*$)/i) || false;	
	}
		
	if (url){
		var newURL = '';
		var parsed = [];
		parsed.protocol = url[1] || '';
		
		parsed.domain = url[2] || '';
		parsed.domain = parsed.domain.replace(/\/+$/, ""); //remove trailing slash
		
		parsed.path = url[3] || '';
		parsed.path = parsed.path.replace('?',""); //remove ?
		parsed.path = parsed.path.replace(/\/+$/, ""); //remove trailing slash
		parsed.path = parsed.path.replace(/^\//, ""); //remove starting slash
		
		parsed.query = url[5] || false;
		
		newURL = parsed.protocol + parsed.domain +'/'+ parsed.path;
		
		if (parsed.query){
			if (parsed.query.indexOf('.php') == -1){
				newURL += '/';
			}
			newURL += '?'+parsed.query;
		}else if (parsed.path) {
			newURL += '/';
		}
	
		return newURL;
	}else {
		return val;	
	}
}
};