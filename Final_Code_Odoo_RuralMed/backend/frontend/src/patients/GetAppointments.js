import React, { useState, useEffect } from 'react';
import './GetAppointments.css';
import PatientNavBar from '../components/PatientNavBar';

const GetAppointments = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const generateCalendarGrid = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxSelectableDate = new Date(today);
    maxSelectableDate.setDate(today.getDate() + 5);

    const calendarDates = [];
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(year, month, day);
      calendarDates.push({
        date,
        isDisabled: date < today || date > maxSelectableDate,
        isSelected: date.toDateString() === selectedDate.toDateString(),
      });
    }
    setDates(calendarDates);
  };

  const generateTimeSlots = () => {
    if (!selectedDate) return;

    const today = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    const slots = [];
    const slotStartHour = 10;
    const slotEndHour = 20;

    for (let hour = slotStartHour; hour <= slotEndHour; hour++) {
      for (let minutes = 0; minutes <= 30; minutes += 30) {
        const slotTime = new Date(selectedDate);
        slotTime.setHours(hour, minutes);
        slots.push({
          time: slotTime,
          isDisabled: isToday && slotTime < today,
        });
      }
    }
    setTimeSlots(slots);
  };

  // Automatically generate calendar dates and time slots when currentDate or selectedDate changes
  useEffect(() => {
    generateCalendarGrid();
  }, [currentDate, selectedDate]); // Add selectedDate as a dependency here

  useEffect(() => {
    generateTimeSlots();
  }, [selectedDate]);

  return (
    <>
      <PatientNavBar />
      <div className="rightContainer">
        <div className="doctor-info">
          <div className="doctor-image">
            <img src="/images/account.png" alt="Doctor Image" />
          </div>
          <div className="doctor-details">
            <h2>Dr. Name</h2>
            <p>Specialization</p>
            <p>Mon-Fri, 10:00AM - 8:00PM</p>
          </div>
        </div>

        <div className="appointment-scheduler">
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={() => changeMonth(-1)}>&lt;</button>
              <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
              <button onClick={() => changeMonth(1)}>&gt;</button>
            </div>
            <div className="calendar-grid">
              {dates.map((day, index) => (
                <button
                  key={index}
                  className={`day ${day.isDisabled ? 'disabled' : ''} ${day.isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    if (!day.isDisabled) {
                      setSelectedDate(day.date);
                      setSelectedTimeSlot(null); // Clear selected time slot when date changes
                    }
                  }}
                  disabled={day.isDisabled}
                >
                  {day.date.getDate()}
                </button>
              ))}
            </div>
          </div>

          <div className="time-selection">
            <h3>Pick an available time</h3>
            <div className="time-slots">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`time-slot ${slot.isDisabled ? 'disabled' : ''} ${
                    selectedTimeSlot === slot.time ? 'selected' : ''
                  }`}
                  onClick={() => {
                    if (!slot.isDisabled) {
                      setSelectedTimeSlot(slot.time);
                    }
                  }}
                  disabled={slot.isDisabled}
                >
                  {slot.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </button>
              ))}
            </div>
          </div>

          <div className="confirm-button">
            <button>Confirm appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAppointments;
