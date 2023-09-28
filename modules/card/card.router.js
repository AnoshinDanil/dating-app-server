var express = require('express');
var router = express.Router();
let controller = require("./card.controller")

router.post('/CreateCard', controller.createCard);
router.get('/LikeHistory', controller.likesHistory);

module.exports = router;
