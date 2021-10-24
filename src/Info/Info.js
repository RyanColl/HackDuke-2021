import React from "react";

const Info = () => {
    return(
        <div>
            <h1 style={{textAlign: 'center'}} className='title is-1 block'>EnviroView</h1>
            <div className='content'>
                <h2 className='title is-3 block'>How To Use EnviroView</h2>
                <p className='is-size-5'>Our data is displayed in both chart and map form. Use the arrows in the <b>bottom-left</b> of the data to switch between map and chart view. Use the Optional Metrics in the <b>top-right</b> of the data to change which piece of data you are observing. You may also <b>export</b> the data using the three dots.</p>
            </div>
            <div className='content'>
                <h2 className='title is-3 block'>Our Analysis</h2>
                <p className='is-size-5'>The collection of maps describes the current data on different environmental conditions in the United States. Displayed below are maps and graphs that represent four seperate subcategories: Transportation, Residential/Home, Energy, and Nature.</p>
            </div>
            <h1 style={{textAlign: 'center'}} className='title is-3 block'>Transportation</h1>
        </div>
    )
}
export default Info;