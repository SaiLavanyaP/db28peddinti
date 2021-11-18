var express = require('express');
var router = express.Router();
var dog_controlers = require('../controllers/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dog', { title: 'Search results for Dog ' });
});

/* GET detail dog page */
router.get('/detail', dog_controlers.dog_view_one_Page);

/* GET create costume page */ 
router.get('/create', dog_controlers.dog_create_Page); 

/* GET create update page */ 
router.get('/update', dog_controlers.dog_update_Page);

/* GET create costume page */ 
router.get('/delete', dog_controlers.dog_delete_Page); 

module.exports = router;
