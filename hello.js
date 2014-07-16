/**
 * Created by huangyao on 14-7-10.
 */



var http = require("http");
var url = require("url");
var port = Number(process.argv[2])

http.createServer(function(req,res){
    var path = url.parse(req.url).pathname;
//	console.log("path = " + path.toString());
    querystring(req)["time"];
    route(path,res)
}).listen(8000);


function route(path,res){
    if(path == "/api/parsetime"){
        //	console.log("/api/parsetime");
    }
    else if(path == "/api/unixtime"){
        //	console.log("/api/unixtime");
    }
}