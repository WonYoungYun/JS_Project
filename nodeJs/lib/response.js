

module.exports ={
    successed : function(body, response){
        response.writeHead(200);
        response.end(body);
    },
    successing : function(redirect, response) {
        response.writeHead(302, redirect);
        response.end('Success');
    },
    failed : function(response){
        response.writeHead(404);
        response.end('Not found');
    }
}