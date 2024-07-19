import './app.css';

import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);
  const [backendTime, setBackendTime] = useState('UNKOWN');
  const [mongoDbConnectetion, setMongoDbConnectetion] = useState(false);

  useEffect(() => {
    fetch('/api/checkConnections')
      .then((res) => res.json())
      .then((data) => {
        setBackendTime(data.serverTime);
        setMongoDbConnectetion(data.mogodbConnection);
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
        <h1>Son las {backendTime} de la mañana en La Havana, Cuba</h1>
      </div>

      <div className="db-card">
        <h1>
          You are {mongoDbConnectetion ? 'successfully' : 'NOT'} connected to
          the Mongo database
        </h1>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
