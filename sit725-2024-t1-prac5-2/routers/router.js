let express = require('express');
let router = express.Router();
let controller = require('../controllers/foodController.js');

router.post('/', async (req, res) => {
    await controller.postFood(req, res);
});

router.get('/', async (req, res) => {
    await controller.getAllFoods(req, res);
});

module.exports = router;