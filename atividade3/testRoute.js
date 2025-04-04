const express = require('express');
const router = express.Router();
const testcontroller = require ('../controllers/testController');

router.get('/test', testcontroller.testeGet);
router.get('/check', testcontroller.validarGet);

router.post('/check', testcontroller.validarPost);
router.post('/check', testcontroller.validarPost);

router.put('/check', testcontroller.validarPut);
router.put('/check', testcontroller.validarPut);

module.exports = router; 
