var express = require('express');
var router = express.Router();

const {test} = require('../controller/controller_Client');



// -------- ----------//
router.get('/test', test)




module.exports = router;
