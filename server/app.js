var express = require('express');
var notelyServerApp = express();

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
