var express = require('express');
var router = express.Router();
let controller = require("./user.controller")

router.get('/Get', controller.get);
router.get('/All', controller.getAll);
router.post('/Update', controller.update);

module.exports = router;
