import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>

    
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите текст"
        className='test'
      />

      <p>Вы ввели: {inputValue}</p>
    </>
  );
}

export default App;
