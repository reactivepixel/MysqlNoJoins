const User = require('../models/users.js');
const Course = require('../models/courses.js');

module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Create
  router.post('/users', (req, res) => {

    const data = {
      name: 'Chris',
      age: 34,
      hobby: 'paintball',
      courseID: 1
    };

    User.create(data, (errorData) => {
      console.error(errorData);
      res.status(500).json(errorData);
    }, (successData) => {
      console.log(successData);
      res.status(200).json(successData);
    })

  });

  // Read
  router.get('/users', (req, res) => {


    User.findAll((errorData) => {
      console.error(errorData);
      res.status(500).json(errorData);
    }, (successData) => {
      console.log(successData);
      res.status(200).json(successData);
    })

  });


  router.get('/users/:id', (req, res) => {
    const where = {id: req.params.id};
    User.find(where, (errorData) => {
      console.error(errorData);
      res.status(500).json(errorData);
    }, (successData) => {
      console.log(successData);
      res.status(200).json(successData);
    })

  });

  router.get('/courses/:id', (req, res) => {
    const where = {id: req.params.id};
    Course.find(where, (errorData) => {
      console.error(errorData);
      res.status(500).json(errorData);
    }, (successData) => {
      console.log(successData);
      res.status(200).json(successData);
    })

  });

  // Update

  // Delete

  return router;
};
