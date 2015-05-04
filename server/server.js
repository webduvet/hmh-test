var 
		fs = require('fs'),
		path = require('path'),
		mime = require('mime'),
		cache = {},
		content = null,
		clc = require('cli-color'),
		http = require('http');

function send404(res){
	res.writeHead(404, {'Content-Type':'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}


function sendFile(res, filePath, fileContents){
	res.writeHead(200, {"Content-Type":mime.lookup(path.basename(filePath))});
	res.end(fileContents);
}

function serveStatic(res, cache, absPath) {
	if (cache[absPath] && false) {
		sendFile(res, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, function(exists) {
			if (exists) {
				fs.readFile(absPath, function(err, data){
					if(err) {
						send404(res);
					} else {
						cache[absPath] = data;
						sendFile(res, absPath, data);
					}
				});
			} else {
				send404(res);
			}
		});
	}
}

function loadContent(){
	// cache content
	content = fs.readFileSync('./public/content.json',{encoding: 'utf8'});
}

function servePager(res, page, orderBy){

	var arr = JSON.parse(content).response.results.result;
	//sorts the content
	arr.sort(function(a,b){
		if (a.content.resource[orderBy] > b.content.resource[orderBy]) return 1;
		if (a.content.resource[orderBy] < b.content.resource[orderBy]) return -1;
		return 0;
	});

	var response = JSON.stringify(arr.splice(page*5, 5));
	res.write(response);
	res.end();
}

var server = http.createServer(function(req, res){
	var filePath = false;
	// we use the url form  domain.com/content/5
	var match = /^\/content\/(resource_type|display_title|language|media_type)\/\d+$/;

	if(req.url === '/') {
		filePath = '../app/build/index.html';
		//filePath = 'public/index.html';
	} else if (match.test(req.url) ){
		var params = req.url.split('/'),
			page = params.pop(),
			orderBy = params.pop();
		console.log(clc.yellow(page, orderBy));
		servePager(res, page, orderBy);
		return;
		filePath = './public/content.json';
	} else {
		filePath = '../app/build' + req.url;
		//filePath = 'public' + req.url;
	}
	var absPath = './' + filePath;
	serveStatic(res, cache, absPath);
});

loadContent();

server.listen(3001, function(){
	console.log(clc.green("server listening on port 3001"));
});


