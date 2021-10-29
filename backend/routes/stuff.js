const express = require('express');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config');

const router = express.Router();
const stuffCtrl = require('../controller/stuff')

router.get('/', auth, stuffCtrl.getAllThing)
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing)
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth,  stuffCtrl.deleteThing);

module.exports = router;