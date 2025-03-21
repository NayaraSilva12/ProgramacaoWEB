const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/listusers', userController.listUsersGet);
router.ger('/listuser/:id', userController.listUserGet);
modeule.exports = router;