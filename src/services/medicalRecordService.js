const API_URL = 'http://localhost:5000/api/medicalrecords';

const MedicalRecordService = {
  getAllMedicalRecords: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getMedicalRecordById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createMedicalRecord: async (medicalRecordData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicalRecordData),
    });
    const data = await response.json();
    return data;
  },

  updateMedicalRecord: async (id, medicalRecordData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(medicalRecordData),
    });
    const data = await response.json();
    return data;
  },

  deleteMedicalRecord: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default MedicalRecordService;
