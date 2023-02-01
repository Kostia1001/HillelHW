import Button from '@mui/material/Button';
import React, { useState } from 'react';

const App = () => {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App">
      <p>Count:{count} </p>
        <Button variant='contained' onClick={() => setCount(count + 1)}>increment</Button>
        <Button variant='contained' onClick={() => setCount(count - 1)}>decrement</Button>
      </div>
    </div>
  );
};

export default App;
