var server=require('./server');
var router=require('./router');
var handler=require('./handler');

var handle={}
handle["/home"]=handler.home
handle["/review"]=handler.review

server.startServer(router.route,handle);