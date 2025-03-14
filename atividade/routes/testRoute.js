const express = require('express');
const router = express.Router();
const testcontroller = require ('../controllers/testController');

router.get('/test', testcontroller.teste);

module.exports = router; 
