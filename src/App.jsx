import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState('');
  const [queryData, setQueryData] = useState({name: '', password: ''})

  useEffect(() => {
    const query = window.location.search;
    if (query) {    
      function parseQueryString(url) {
        const queryString = url.split('?')[1];
        const paramsArray = queryString.split('&');
      
        const paramsObject = {};
      
        paramsArray.forEach(param => {
          const [key, value] = param.split('=');
          paramsObject[key] = value;
        });
      
        return paramsObject;
      }
    
      const queryParams = parseQueryString(query)
      setQueryData(queryParams)
      localStorage.setItem('userData', JSON.stringify(queryParams))
    }
  }, [])




	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

  const saveTextOnApi = () => {
    fetch('http://localhost:8944/signIn/patch', {method: 'PATCH', body: JSON.stringify({userName: queryData.name, text: inputValue })})
  }

	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Введите текст'
				className='test'
			/>
      <button onClick={saveTextOnApi}>
        Save text
      </button>
			<p>{queryData.name}</p>
			<p>Вы ввели: {inputValue}</p>
		</>
	);
}

export default App;
