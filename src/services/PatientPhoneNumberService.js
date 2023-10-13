const API_URL = 'http://localhost:5000/api/patients/phoneNumbers';

const PatientPhoneNumberService = {
  getAllPatientPhoneNumbers: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },
  
  getPatientPhoneNumberById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createPatientPhoneNumber: async (patientPhoneNumberData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientPhoneNumberData),
    });
    const data = await response.json();
    return data;
  },

  updatePatientPhoneNumber: async (id, patientPhoneNumberData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientPhoneNumberData),
    });
    const data = await response.json();
    return data;
  },

  deletePatientPhoneNumber: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default PatientPhoneNumberService;