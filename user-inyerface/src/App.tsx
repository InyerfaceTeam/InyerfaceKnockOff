import React, { useState } from 'react';
import { RegisterComp } from './components/RegisterComp';
import { TimerComp } from './components/TimerComp';

function App() {
  
  //temp functions (definitely need to move aaall of this into another component)
  const [showTimer, setShowTimer] = useState(false);
  const showTime = () => {
    if (!showTimer)
    {
      setShowTimer(true);
    }
  }
  const stopShowingTime = () => {
    if (showTimer)
    {
      setShowTimer(false);
    }
  }
  return (
    <>
      <button onClick={showTime}>Register</button>
      { showTimer ? <>
      <TimerComp seconds={Math.round(Math.random()*10)} fontSize = {20} triggeredFunction={stopShowingTime}/>
      <RegisterComp />
      </> : <span/> }
    </>
  );
}

export default App;
