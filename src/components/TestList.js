import React, { useState, useEffect } from 'react';
import TestService from '../services/testService';

const TestComponent = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    TestService.getAllTests().then((data) => setTests(data));
  }, []);

  return (
    <div>
      <h2>Tests</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            ID: {test.id}, Name: {test.testName}, Type: {test.testType}, Date: {test.testDate}, Results: {test.testResults}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
