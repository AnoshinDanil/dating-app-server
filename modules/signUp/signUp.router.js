var express = require('express');
var router = express.Router();
let controller = require("./signUp.controller")

router.post('/SignUp', controller.signUp);
router.post('/Confirmation',  controller.userConfirmation);
router.get('/All', controller.getAll);
router.post('/Update', controller.update);

module.exports = router;