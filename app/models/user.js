//var mysql = require('mysql');

/*var pool = mysql.createPool({
  host     :process.env.DB_CON,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  connectionLimit: 10,
  supportBigNumbers: true
});
*/


// Get records from a city
/*exports.getRecords=function (id,callback) {
	console.log(id);
  var sql = slugify(process.env.SQ_User);
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
};
*/
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const userSchema = new Schema({
  usrname: String,  
  nrc: String,
  dob : String, // (for date time)
  gender: String,// radio
  design: String, //dropdown
  ph: String,
  social : String,// checkbox (social usage)
  remark: String,
  join_date: Date

});

// middleware -----make sure that the slug is created from the person's nrc
userSchema.pre('save', function(next) {
  this.slug = slugify(this.nrc);
  next();
});

// create the model
const userModel = mongoose.model('User', userSchema);

// export the model
module.exports = userModel;

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}