import React, { useState, useEffect } from 'react';

import './App.css';

import { getPeople } from './services/getPeople';

function App() {

  const [ list, setList ] = useState([]);
  const [ click, showList ] = useState(false)

  useEffect(() => {
    if(click) {
      getPeople()
      .then(items => {
        const { results } = items

        setList(results)
      })
    }
    
    return []
  })

  return (
    <div className="App">
      <h1>People Star Wars</h1>
      <button type="button" onClick={() => showList(true)}>Show</button>
      <ul>
        {list.map(result => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
