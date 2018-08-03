var fs = require('fs');
var qs = require('querystring');
var path = require('path');
var responsing = require('./response.js');

function deleteBoard(request, response){
    var body = '';
    request.on('data',  function(data){
      body += data;
    });
    request.on('end', function(){
      var post = qs.parse(body);
      var id = post.id;
      var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function(error){
        responsing.successing({Location: `/`}, response);
      })
    });
}

module.exports = deleteBoard;