// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection using Atlas URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

// Import Routes
const patientsRoutes = require('./routes/patientsRoutes');
const doctorsRoutes = require('./routes/doctorsRoutes');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const testsRoutes = require('./routes/testsRoutes');
const medicalRecordsRoutes = require('./routes/medicalRecordsRoutes');
const billingRoutes = require('./routes/billingRoutes');
const medicationRoutes = require('./routes/medicationRoutes');

// Use Routes
app.use('/api/patients', patientsRoutes);
app.use('/api/doctors', doctorsRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/tests', testsRoutes);
app.use('/api/medicalRecords', medicalRecordsRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/medication', medicationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// const express = require('express');
// const cors = require('cors');
// const mongoose= require('mongoose');



// require('dotenv').config();
// const application = express();// Create an instance of Express.js
// const port = process.env.PORT || 5000;



// application.use(cors());
// application.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   const connection = mongoose.connection;
//   connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
//   });

// // mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => {
// //         console.log("MongoDB database connection established successfully");
// //     })
// //     .catch((err) => {
// //         conso    le.error("MongoDB connection error:", err);
// //     });

// const usersRouter= require('./routes/user');
// application.use('/user',usersRouter)


// application.listen(port, () => { 
//     console.log(`Server is running on ${port}`);
// });
