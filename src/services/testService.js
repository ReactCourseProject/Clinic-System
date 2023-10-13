const API_URL = 'http://localhost:5000/api/tests';

const TestService = {
  getAllTests: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  },

  getTestById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  createTest: async (testData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    const data = await response.json();
    return data;
  },

  updateTest: async (id, testData) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    const data = await response.json();
    return data;
  },

  deleteTest: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default TestService;
