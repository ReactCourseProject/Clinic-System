const API_URL = 'http://localhost:5000/api/medications';

const MedicationService = {
  getAllMedications: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
  
  getMedicationById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createMedication: async (medicationData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicationData),
    });
    const data = await response.json();
    return data;
  },

  updateMedication: async (id, medicationData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicationData),
    });
    const data = await response.json();
    return data;
  },

  deleteMedication: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default MedicationService;