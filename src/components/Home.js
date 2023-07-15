import React, { useState } from 'react';

const LandingPage = () => {
  const [name] = useState(getName()); // Replace with the user's name
  const [timeOfDay] = useState(getTimeOfDay());

  function getName() {
    const data = localStorage.getItem('userData')
    const parsedData = JSON.parse(data);
    return parsedData.name
  }

  function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return 'Morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }

  return (
    <div className='grid place-items-center text-2xl mt-24 font-semibold border-2 py-12 border-purple-400'>
      <h1 className='text-gray'>Good {timeOfDay} Rescuer!</h1>
      <h2 className='mt-2'>How are you doing today, {name}?</h2>
    </div>
  );
};

export default LandingPage;
