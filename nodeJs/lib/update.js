var fs = require('fs');
var template = require('./template.js');
var path = require('path');
var qs = require('querystring');
var responsing = require('./response.js');
module.exports = {
    page : function(queryData, response){
        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.html(title, list,`
                    <form action ="/update_process" method="post">
                    <input type ="hidden" name="id" value="${title}">
                    <p><input type = "text" name="title" placeholder="title" value="${title}"></p>
                    <p>
                        <textarea name = "description" placeholder="description">${description}</textarea>
                    </p>
                    <p>
                        <input class="btn btn-success" type="submit">
                    </p>
                    </form>
                    `,`<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
                responsing.successed(html, response);
            });
          });
    },

    update : function(request, response){
        var body = '';
        request.on('data',  function(data){
          body += data;
        });
        request.on('end', function(){
          var post = qs.parse(body);
          var id = post.id;
          var title = post.title;
          var description = post.description;
          fs.rename(`data/${id}`, `data/${title}`, function(error){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                responsing.successing({Location: `/?id=${title}`}, response);
            })
          })
        });
    }
}