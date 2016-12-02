var db = require('mongoose');
var path = require('path');
// db.connect(path.join(__dirname, '../db/monngodb')); //TODO;
db.connect('mongodb://localhost/shortly');
db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', function() {
  console.log('connected to the database');   

});



var Cat = db.model('Cat', { name: String });
var kitty = new Cat({ name: 'Zildjian' });

kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

var Schema = db.Schema;

var UserSchema = new Schema({
  id: String,
  username: String,
  password: String,
  // timestamp: {
  //   createdAt: Date,
  //   updatedAt: Date
  // },
  links: [
    {
      url: String,
      baseUrl: Date,
      code: String,
      title: String,
      visits: Number,
      // timestamp: {
      //   createdAt: Date,
      //   updatedAt: Date
      // }
    }
  ]
});



// var path = require('path');
// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

module.exports = db;
