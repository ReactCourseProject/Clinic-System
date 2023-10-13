const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

const { getAllBillings, getBillingById, createBilling, updateBilling, deleteBilling } = billingController;

router.get('/', getAllBillings);
router.get('/:id', getBillingById);
router.post('/', createBilling);
router.put('/:id', updateBilling);
router.delete('/:id', deleteBilling);

module.exports = router;
