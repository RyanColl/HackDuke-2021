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
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
 
  <div className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item is-primary">
        Maps
      </a>
      <a className="navbar-item search-bar is-primary">
      <AutoComplete
            name="state"
            placeholder="Search For a State"
            data={data.map(data => data.State)}
            followInput={followInput}
        />
        <Link to={`/${searchInput}`}><button className='button is-light search_button'>Search</button></Link>
      </a>
    </div>
  </div>
</nav>
    )
}
export default Nav;