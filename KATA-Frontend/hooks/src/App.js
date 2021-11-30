import React, { useState, useEffect } from 'react';

import './App.css';

import { getPeople } from './services/getPeople';

function App() {

  const [ list, setList ] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPeople()
      .then(items => {
        const { results } = items

        if(mounted) {
          setList(results)
        }
      })
    return () => mounted = false;
  })

  return (
    <div className="App">
      <h1>People Star Wars</h1>
      <ul>
        {list.map(result => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
