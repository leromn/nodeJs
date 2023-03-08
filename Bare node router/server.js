const http=require('http')
const url=require('url')

function startServer(route,handle){

	function onRequest(req,resp){
	var pathname=url.parse(req.url).pathname;
	console.log("request recieved for "+pathname)
	route(handle,pathname);
	resp.writeHead(200,{"Content-Type":"text/plain"});
	resp.write("response from the node server");
	resp.end();

}

http.createServer(onRequest).listen(2222)
console.log('server started running')

}
exports.startServer=startServer;