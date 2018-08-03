var http = require('http');
var url = require('url');
var boardCreate = require('./lib/create.js');
var boardRead = require('./lib/read.js');
var boardUpdate = require('./lib/update.js');
var boardDelete = require('./lib/delete.js');
var responsing = require('./lib/response.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    switch(pathname){
      case '/': {
        if(queryData.id === undefined){
          boardRead.index(response);
        } else {
          boardRead.view(queryData, response);
        }
        break;
      }
      case '/create': {
        boardCreate.page(response);
        break;
      }
      case '/create_process' : {
        boardCreate.create(request, response);
        break;
      }
      case '/update' : {
        boardUpdate.page(queryData, response);
        break;
      }
      case '/update_process' : {
        boardUpdate.update(request, response);
        break;
      }
      case '/delete_process' : {
        boardDelete(request, response);
        break;
      }
      default : {
        responsing.failed(response);
      }
    }
});
app.listen(3000);