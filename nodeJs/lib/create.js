var fs = require('fs');
var template = require('./template.js');
var qs = require('querystring');
var responsing = require('./response.js');

module.exports = {
    page : function(response){
        fs.readdir('./data', function(error, filelist){
        var title = 'Web -create';
        var list = template.list(filelist);
        var html = template.html(title, list, `
          <form action ="/create_process" method="post">
            <p><input type = "text" name="title" placeholder="title"></p>
            <p>
              <textarea name = "description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
        </form>
        `, '');
        responsing.successed(html, response);
      })
    },
    create : function(request, response) {
        var body = '';
        request.on('data',  function(data){
            body += data;
        });
        request.on('end', function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            responsing.successing({Location: `/?id=${title}`}, response);
            })
        });
    }
}