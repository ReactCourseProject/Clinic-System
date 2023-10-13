const API_URL = 'http://localhost:5000/api/doctors/phoneNumbers';

const DoctorPhoneNumberService = {
  getAllDoctorPhoneNumbers: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  
  getDoctorPhoneNumberById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createDoctorPhoneNumber: async (doctorPhoneNumberData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorPhoneNumberData),
    });
    const data = await response.json();
    return data;
  },

  updateDoctorPhoneNumber: async (id, doctorPhoneNumberData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorPhoneNumberData),
    });
    const data = await response.json();
    return data;
  },

  deleteDoctorPhoneNumber: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default DoctorPhoneNumberService;