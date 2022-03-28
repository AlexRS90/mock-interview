import React, { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const limitClaps = () => {
    if (count < 10) {
      setCount(count +1);
    }
    else {
      setShowMessage(true)
    }
  }
  return (
    <>
      <h1>Claps: {count}</h1>
      <button onClick={() => limitClaps()}>Give a Clap</button>
      {showMessage && <p>You can't give more claps</p>}
    </>
  )
}

export default Test;