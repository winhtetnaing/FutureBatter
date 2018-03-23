// create a new express router
const express      = require('express'),
  router           = express.Router(),
  mainController   = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller'),
  usersController = require('./controllers/users.controller'),
  tutoController =require('./controllers/tuto.controller');
  mappingController=require('./controllers/mapping.controller');

// export router
module.exports = router;

// define routes
router.get('/', mainController.showHome);
// main routes
router.get('/home', mainController.showHome);

// event routes
router.get('/events', eventsController.showEvents);

// seed events
router.get('/events/seed',  eventsController.seedEvents);

// create events
router.get('/events/create',  eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug',     eventsController.processEdit);

// delete events
router.get('/events/:slug/delete', eventsController.deleteEvent);

// show a single event
router.get('/events/:slug', eventsController.showSingle);

// customer
/*router.get('/users', usersController.showUsers);*/
router.get('/users', usersController.showUsers);
router.get('/users/create', usersController.showCreate);
router.post('/users/create', usersController.processCreate);
//router.get('/users', usersController.showUsers);

//info
router.get('/training/schedule',tutoController.showInfo);
router.get('/training/requiretool',tutoController.reqtool);

//mapping for event and user
router.get('/attend/show',mappingController.showMapping);