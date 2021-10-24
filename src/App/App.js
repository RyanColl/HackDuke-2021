
import './App.css';
import Nav from '../Nav/Nav'
import { useEffect, useState } from 'react';
import Info from '../Info/Info';
import data from '../Data/jsondata.json'
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
          
          <iframe width="1200" height="900" src="https://datastudio.google.com/embed/reporting/cc1c79e2-33c1-4911-8315-59a16e64769e/page/p_weoflaopoc" frameborder="0" style={{border: 0, marginTop: 40}} allowfullscreen></iframe>
        </Route>
        <Route path='/:state'>
          <State />
        </Route>
      </Switch>
    </div>
  );
}

export default App;