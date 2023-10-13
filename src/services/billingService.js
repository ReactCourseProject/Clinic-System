const API_URL = 'http://localhost:5000/api/billing';

const BillingService = {
  getAllBillings: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getBillingById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createBilling: async (billingData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(billingData),
    });
    const data = await response.json();
    return data;
  },

  updateBilling: async (id, billingData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(billingData),
    });
    const data = await response.json();
    return data;
  },

  deleteBilling: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default BillingService;
