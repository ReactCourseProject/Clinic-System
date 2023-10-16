const Test = require('../models/Test');

const testsController = {
  getAllTests: async (req, res) => {
    try {
      const tests = await Test.find();
      res.json(tests);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createTest: async (req, res) => {
    const { ID, testName, testType, testDate, testResults, testNotes, DoctorID, PatientsID, BillingID } = req.body;
    try {
      const newTest = new Test({
        ID,
        testName,
        testType,
        testDate,
        testResults,
        testNotes,
        DoctorID,
        PatientsID,
        BillingID
      });
      await newTest.save();
      res.status(201).json(newTest);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  getTestById: async (req, res) => {
    const testId = req.params.id;
    try {
      const test = await Test.findById(testId);
      if (test) {
        res.json(test);
      } else {
        res.status(404).json({ error: 'Test not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateTest: async (req, res) => {
    const testId = req.params.id;
    const updates = req.body;
    try {
      const updatedTest = await Test.findByIdAndUpdate(testId, updates, { new: true });
      if (updatedTest) {
        res.json(updatedTest);
      } else {
        res.status(404).json({ error: 'Test not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  deleteTest: async (req, res) => {
    const testId = req.params.id;
    try {
      const deletedTest = await Test.findByIdAndDelete(testId);
      if (deletedTest) {
        res.json({ message: 'Test deleted successfully' });
      } else {
        res.status(404).json({ error: 'Test not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = testsController;
