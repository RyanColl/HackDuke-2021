
import './App.css';
import Nav from '../Nav/Nav'
import { useEffect, useState } from 'react';
import Info from '../Info/Info';

import {Switch, Link, Route} from 'react-router-dom'
import State from '../State/State';
const App = () => {
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    // data.map(data => console.log(data.State))
  }, [])
  return (
    <div className="App-header">
      <Nav searchInput={searchInput} setSearchInput={setSearchInput} />
      <Switch>
        <Route path='/' exact={true}>
          <div style={{marginTop: 25}}>
            <Info />
          </div>
          
          </Route>
        <Route path='/:state'>
          <State />
        </Route>
      </Switch>
    </div>
  );
}

export default App;