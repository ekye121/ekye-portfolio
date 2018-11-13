var mongoose = require('mongoose');
var connection = process.env.MONGODB_URI || 'mongodb://localhost/portfolio';
mongoose.connect(connection)

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongod!')
});
