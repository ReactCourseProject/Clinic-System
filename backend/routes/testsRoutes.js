const express = require('express');
const router = express.Router();
const testsController = require('../controllers/testsController');

const { getAllTests, getTestById, createTest, updateTest, deleteTest } = testsController;

router.get('/', getAllTests);
router.get('/:id', getTestById);
router.post('/', createTest);
router.put('/:id', updateTest);
router.delete('/:id', deleteTest);

module.exports = router;
