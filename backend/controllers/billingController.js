const Billing = require('../models/Billing');

const billingController = {
  getAllBillings: async (req, res) => {
    try {
      const billings = await Billing.find();
      res.json(billings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createBilling: async (req, res) => {
    const {
      ID,
      PaymentMethod,
      TotalAmount,
      Date,
      Status,
      DoctorID,
      PatientsID,
      TestID,
      MedicationID,
    } = req.body;
    try {
      const newBilling = new Billing({
        ID,
        PaymentMethod,
        TotalAmount,
        Date,
        Status,
        DoctorID,
        PatientsID,
        TestID,
        MedicationID,
      });
      await newBilling.save();
      res.status(201).json(newBilling);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getBillingById: async (req, res) => {
    const billingId = req.params.id;
    try {
      const billing = await Billing.findById(billingId);
      if (billing) {
        res.json(billing);
      } else {
        res.status(404).json({ error: 'Billing not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBilling: async (req, res) => {
    const billingId = req.params.id;
    const updates = req.body;
    try {
      const updatedBilling = await Billing.findByIdAndUpdate(billingId, updates, { new: true });
      if (updatedBilling) {
        res.json(updatedBilling);
      } else {
        res.status(404).json({ error: 'Billing not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteBilling: async (req, res) => {
    const billingId = req.params.id;
    try {
      const deletedBilling = await Billing.findByIdAndDelete(billingId);
      if (deletedBilling) {
        res.json({ message: 'Billing deleted successfully' });
      } else {
        res.status(404).json({ error: 'Billing not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = billingController;
