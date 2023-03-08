function route(handle,pathname){
	console.log("Routing for: "+pathname)
	if(typeof handle[pathname]==='function'){
		handle[pathname]();
	}else{
		console.log("no handler for "+pathname)
	}
}
exports.route=route;