const User = require('../models/user');

module.exports = {
 showUsers: showUsers,
 /*
  showSingle: showSingle,
  seedEvents: seedEvents,*/
  showCreate: showCreate,
  processCreate: processCreate
  /*showEdit: showEdit,
  processEdit: processEdit,
  deleteEvent: deleteEvent*/
}

/**
 * Process the User creation form
 */
function processCreate(req, res) {
 /*  console.log("show req date ="+req.body.dob);
   console.log("show req gender ="+req.body.gender);
    console.log("show req design ="+req.body.design);
     console.log("show req social ="+req.body.social);
       console.log("show req ph ="+req.body.ph);*/
  // validate information
  req.checkBody('usrname', 'Name is required.').notEmpty();
  req.checkBody('nrc', 'Name is required.').notEmpty();
  req.checkBody('dob', 'Date of Birth is required.').notEmpty();
  req.checkBody('gender', 'Gender is required.').notEmpty();
  req.checkBody('design', 'Designation is required.').notEmpty();
  req.checkBody('social', 'Social is required.').notEmpty();
  req.checkBody('ph', 'Phone is required.').notEmpty();

  // if there are errors, redirect and save errors to flash
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect('/users/create');
  }
 
  //var aa=req.body;
  //console.log("data ="+aa.toString());
  var now=Date.now();

  // create a new event
  const users = new User({
      usrname: req.body.usrname,
      nrc: req.body.nrc,
      dob : req.body.dob, // (for date time)
      gender: req.body.gender,// radio
      design: req.body.design, //dropdown
      ph: req.body.ph,
      social : req.body.social,// checkbox (social usage)
      remark: req.body.remark,
      join_date: now
  });
  // save event


  users.save((err) =>{
        if (err){
      console.log("err : "+err);
     res.render('pages/500', {     
      success: req.flash('Server Error!')
    });
     throw err;
   }
      });
    

 // users.save((err) => {
   // if (err){
  //    console.log("err : "+err);
   //   throw err;
  //  }

    // set a successful flash message
   req.flash('success', 'Successfuly created event!');

    // redirect to the newly created event
    res.redirect('/users');
  //});
}


/**
 * Show all events
 */
function showUsers(req, res) {
  // get all events   
  User.find({}, (err, users) => {
    if (err) {
      res.status(404);
      res.send('Person not found!');
    }

    // return a view with data
    res.render('pages/User/users', { 
      users: users,
      success: req.flash('success')
    });
  });
}


 function showCreate(req, res) {
   //console.log("reach ");
  res.render('pages/User/create', {
    errors: req.flash('errors')
  });
}


