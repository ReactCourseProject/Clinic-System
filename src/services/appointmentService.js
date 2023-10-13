const API_URL = 'http://localhost:5000/api/appointments';

const AppointmentService = {
  getAllAppointments: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getAppointmentById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createAppointment: async (appointmentData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });
    const data = await response.json();
    return data;
  },

  updateAppointment: async (id, appointmentData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    });
    const data = await response.json();
    return data;
  },

  deleteAppointment: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default AppointmentService;
