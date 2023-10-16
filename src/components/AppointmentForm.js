import React, { useEffect, useState } from 'react';
import AppointmentService from '../services/appointmentService';

const AppointmentComponent = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    AppointmentService.getAllAppointments().then(data => {
      setAppointments(data);
    });
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentComponent;
