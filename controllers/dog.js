var dog = require('../models/dog');
// List of all dog
exports.dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dog list');
};
// for a specific dog.
exports.dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle dog create on POST.
exports.dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: dog create POST');
};
// Handle dog delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle dog update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};