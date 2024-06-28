import './app.css';

import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);
  const [backendTime, setBackendTime] = useState('UNKOWN');

  useEffect(() => {
    fetch('/api/serverTime')
      .then((res) => res.json())
      .then((data) => {
        setBackendTime(data.message);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((prevState) => prevState + 1)}
          className="bg-brand-main md:text-yellow-700"
        >
          count is {count}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>

      <div className="server-card">
        <h1>It is {backendTime} on the Server, Cuba</h1>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
