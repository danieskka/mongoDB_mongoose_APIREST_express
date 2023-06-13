const express = require('express')
const checkApiKey = require('../middlewares/auth_api_key')
const productsApiController = require('../controllers/productsApiController')
const productsApiRouter = express.Router();


productsApiRouter.get('/:id?',productsApiController.getProducts);

// POST http://localhost:3000/api/products?API_KEY=123abc
productsApiRouter.post('/',checkApiKey,productsApiController.createProduct);

// DELETE
productsApiRouter.delete('/',checkApiKey, productsApiController.deleteProduct);


module.exports = productsApiRouter;
