const fs = require('fs');
const path = require('path');

const BILLING_DATA_PATH = path.join(__dirname, 'billingService.json');

const readBillingData = () => {
  const rawData = fs.readFileSync(BILLING_DATA_PATH);
  return JSON.parse(rawData);
};

const writeBillingData = (data) => {
  fs.writeFileSync(BILLING_DATA_PATH, JSON.stringify(data, null, 2));
};

const BillingService = {
  getAllBillings: () => {
    return readBillingData();
  },

  getBillingById: (id) => {
    const billings = readBillingData();
    return billings.find(billing => billing.id === id);
  },

  createBilling: (billingData) => {
    const billings = readBillingData();
    billingData.id = generateUniqueId(); // Implement a function to generate unique IDs
    billings.push(billingData);
    writeBillingData(billings);
    return billingData;
  },

  updateBilling: (id, billingData) => {
    const billings = readBillingData();
    const existingBillingIndex = billings.findIndex(billing => billing.id === id);
    if (existingBillingIndex !== -1) {
      billings[existingBillingIndex] = { id, ...billingData };
      writeBillingData(billings);
      return billings[existingBillingIndex];
    }
    return null; // Return null if billing with given ID is not found
  },

  deleteBilling: (id) => {
    const billings = readBillingData();
    const updatedBillings = billings.filter(billing => billing.id !== id);
    writeBillingData(updatedBillings);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = BillingService;
