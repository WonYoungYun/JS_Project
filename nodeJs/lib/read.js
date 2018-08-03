var fs = require('fs');
var template = require('./template.js');
var path = require('path');
var responsing = require('./response.js');



module.exports = {
    index : function(response){
        fs.readdir('./data', function(error, filelist){
            var title = 'Welcome';
            var description = filelist;
            var list = template.list(filelist);
            var html = template.html(title, list, `<h2>${title}</h2>${description}`, '<a href="/create">create</a>');
            responsing.successed(html, response);
        })
    },
    view : function(queryData, response){
        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
              var title = queryData.id;
              var list = template.list(filelist);
              var html = template.html(title, list, `<h2>${title}</h2>${description}`,`
              <a href="/create">create</a>
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`
            );
                responsing.successed(html, response);
            });
          });
    }
}