var db = require('../models/stock');

module.exports = {
 /* showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents,*/
  showCreate: showCreate
 /* processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit,
  deleteEvent: deleteEvent*/
}

 // get all events   
  /*Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      res.send('Events not found!');
    }
*/

function showCreate(req, res) {
    db.getRecords("xxx", function(err, results) {
    if(err) {  res.sendFile(__dirname + '/views/500.html');  return;
    // Respond with results as JSON
     res.render('pages/home', {
                          data:results,
                         // tok:token,
                          errors: req.flash('errors')
            });
        };
      });

 }


