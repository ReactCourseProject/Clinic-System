const fs = require('fs');
const path = require('path');

const TEST_DATA_PATH = path.join(__dirname, 'testService.json');

const readTestData = () => {
  try {
    const rawData = fs.readFileSync(TEST_DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};

const writeTestData = (data) => {
  fs.writeFileSync(TEST_DATA_PATH, JSON.stringify(data, null, 2));
};

const TestService = {
  getAllTests: () => {
    return readTestData();
  },

  getTestById: (id) => {
    const tests = readTestData();
    return tests.find(test => test.id === id);
  },

  createTest: (testData) => {
    const tests = readTestData();
    testData.id = generateUniqueId(); // Implement a function to generate unique IDs
    tests.push(testData);
    writeTestData(tests);
    return testData;
  },

  updateTest: (id, testData) => {
    const tests = readTestData();
    const existingTestIndex = tests.findIndex(test => test.id === id);
    if (existingTestIndex !== -1) {
      tests[existingTestIndex] = { id, ...testData };
      writeTestData(tests);
      return tests[existingTestIndex];
    }
    return null; // Return null if test with given ID is not found
  },

  deleteTest: (id) => {
    const tests = readTestData();
    const updatedTests = tests.filter(test => test.id !== id);
    writeTestData(updatedTests);
    return true; // Return true if deletion is successful, false otherwise
  },
};

module.exports = TestService;
