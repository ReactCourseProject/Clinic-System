const API_URL = 'http://localhost:5000/api/patients'; // Your backend API URL

const PatientService = {
  getAllPatients: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getPatientById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createPatient: async (patientData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });
    const data = await response.json();
    return data;
  },

  updatePatient: async (id, patientData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });
    const data = await response.json();
    return data;
  },

  deletePatient: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default PatientService;
