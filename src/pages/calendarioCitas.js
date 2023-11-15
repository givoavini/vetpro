import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Puedes redirigir a una página específica con la fecha seleccionada
    navigate(`/detalle-cita/${newDate.toISOString()}`);
  };

  return (
    <div className='agenda-background'>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Calendario de Citas</h2>
                <div className="text-center">
                  <Calendar
                    onChange={handleDateChange}
                    value={date}
                    calendarType="US"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
