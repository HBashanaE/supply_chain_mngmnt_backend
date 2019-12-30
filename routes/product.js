const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/add', productController.add);
router.post('/edit', productController.edit);
module.exports = router;