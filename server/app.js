var express = require('express');
var notelyServerApp = express();

var db = require('mongoose');
db.connect('mongodb://localhost:27017/notely');

var NoteSchema = db.Schema({
  title: String,
  body_html: String
});

var Restaurant = db.model('Note', NoteSchema);

// Cross-Origin Resource Sharing (CORS) middleware
notelyServerApp.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

notelyServerApp.get('/', function(req, res) {
  Restaurant.find().then(function(notes) {
    res.json(notes);
  });

  // res.json([
  //   {
  //     title: 'Edited hardcoded note!',
  //     body_html: 'Cool note. Aww, shucks.'
  //   },
  //   {
  //     title: 'Another edited hardcoded note',
  //     body_html: "Ain't life grand?"
  //   }
  // ]);
});

notelyServerApp.listen(3030, function() {
  console.log('Listening on http://localhost:3030');
});
