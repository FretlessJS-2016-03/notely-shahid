var db = require('../config/db');
var NoteSchema = require('./note-schema');

var Note = db.model('Note', NoteSchema);
// var Note = db.orders.find().sort( { title: -1 } )

module.exports = Note;
