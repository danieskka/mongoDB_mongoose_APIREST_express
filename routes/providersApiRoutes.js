const express = require('express')
const checkApiKey = require('../middlewares/auth_api_key')
const providersApiController = require('../controllers/providersApiController')
const providersApiRouter = express.Router();

providersApiRouter.get('/:id?',providersApiController.getProviders);

providersApiRouter.post('/',checkApiKey,providersApiController.createProvider);


module.exports = providersApiRouter;