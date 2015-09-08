define([],function(){

	var loadCss = {
		load: function(url, id) {
			var id = id || null;
		    var link = document.createElement("link");
		    link.type = "text/css";
		    link.rel = "stylesheet";
		    link.href = 'css/' + url;
		    if (id) link.id = id;
		    document.getElementsByTagName("head")[0].appendChild(link);
		}
	}

	return loadCss;
})