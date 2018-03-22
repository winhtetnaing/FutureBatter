//var db = require('../models/user');

module.exports = {
 /* showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents,*/
  showInfo: showInfo,
  reqtool: reqtool
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

/*function showCreate(req, res) {
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

 }*/


 function showInfo(req, res) {
   console.log("reach ");
  res.render('pages/Tuto/TrainingSchedule', {
    errors: req.flash('errors')
  });
}
 function reqtool(req, res) {
   console.log("reach ");
  res.render('pages/Tuto/Requiretools', {
    errors: req.flash('errors')
  });
}

