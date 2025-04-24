const express = require('express');
const router = express.Router();
const multer = require('multer');
const lotController = require('../controllers/lotController');
const { authenticate } = require('../middlewares/auth');


const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), lotController.uploadLots);
router.post('/upload-form', lotController.uploadLotsFrom);
router.get('/', lotController.getLots);
router.put('/:id', lotController.updateLot);
router.delete('/:id', lotController.deleteLots);
router.delete('/clear-all', lotController.clearLots);

module.exports = router;