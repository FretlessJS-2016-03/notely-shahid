var express = require('express');
var notelyServerApp = express();

//Cross-origin resource sharing (CORS) middleware
notelyServerApp.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  next();

});
notelyServerApp.get('/', function(req, res){
res.json([
  {
    title: 'Hardcoded note',
    body_html: 'Cool note. Aqq, shucks.'
  },
  {
    title: 'Another hardcoded note',
    body_html: "Ain't life grand?"
  }
])
});

notelyServerApp.listen(3030, function(){
console.log('Listing on http://localhost:3030');
});
