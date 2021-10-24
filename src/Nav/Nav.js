import React from "react";
import AutoComplete from '../AutoComplete/AutoComplete'
import data from '../Data/data.json'
import { Link } from "react-router-dom";
const Nav = (props) => {
    const {searchInput, setSearchInput} = props;
    const followInput = (value) => {
        setSearchInput(value)
    }
    return(
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
 
 <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <img src="img/ecosystem.png" width="28" height="28" />
    </Link>
  </div>
  <div className="navbar-menu">

    <div className="navbar-start">
      <Link to='/' className="navbar-item is-primary">
        <b>Home</b>
      </Link>
      {['Nature', 'Energy', 'Transportation', 'Household'].map(s => {
        return (
          <a className='navbar-item is-primary' href={`#${s.toLowerCase()}`}>{s}</a>
        )
      })}
      <a className="navbar-item search-bar is-primary">
      <AutoComplete
            name="state"
            placeholder="Search For a State"
            data={data.map(data => data.State)}
            followInput={followInput}
        />
        <Link to={data.filter(state => state.State.toLowerCase() === searchInput.toLowerCase()).length > 0 ? `/${searchInput}` : '/'}><button className='button is-light search_button'>Search</button></Link>
      </a>
    </div>
  </div>
</nav>
    )
}
export default Nav;