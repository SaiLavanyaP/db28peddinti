var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
router.get('/', dog_controller.dog_view_all_Page );

/// dog ROUTES ///
// POST request for creating a dog.
router.post('/dog', dog_controller.dog_create_post);
// DELETE request to delete dog.
router.delete('/resource/dog/:id', dog_controller.dog_delete);
// PUT request to update dog.
router.put('/dog/:id',
dog_controller.dog_update_put);
// GET request for one dog.
router.get('/dog/:id', dog_controller.dog_detail);
// GET request for list of all dog items.
router.get('/dog', dog_controller.dog_list);
module.exports = router;