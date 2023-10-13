const API_URL = 'http://localhost:5000/api/doctors'; // Your backend API URL

const DoctorService = {
  getAllDoctors: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getDoctorById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createDoctor: async (doctorData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });
    const data = await response.json();
    return data;
  },

  updateDoctor: async (id, doctorData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });
    const data = await response.json();
    return data;
  },

  deleteDoctor: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default DoctorService;
