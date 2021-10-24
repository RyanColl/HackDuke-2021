import React from "react";


const Info = () => {

    const width = window.innerWidth
    const info = [
        {
            id: 1,
            title: 'Nature',
            statistics: [
                'Percentage of Total Land that is Forest, 2018', 
                'Number of Billion-Dollar Disasters in the last Five Years',
                'Increase in Temperature from Yearly Average, Degrees, 2019'
            ],
            Iframe: () => {
                return(
                    <div className='box'><iframe width="1200" height="900" src="https://datastudio.google.com/embed/reporting/75aa8574-69b5-4494-b898-3c9f5a030172/page/QRldC" frameborder="0" style={{border: 0}} allowfullscreen></iframe></div>
                )
            }
    
        },
        {
            id: 2,
            title: 'Energy',
            statistics: [
                'Per capita Energy-Related CO2 Emissions, 2018',
                'Million Metric Tons of Coal energy-related Emissions, 2018',
                'Million Metric Tons of Electricity energy-related Emissions, 2018',
                'Million Metric Tons of Natural gas energy-related Emissions, 2018',
                'Million Metric Tons of Petroleum energy-related Emissions, 2018'
            ],
            Iframe: () => {
                return(
                    <div className='box'>
                        <iframe width="1200" height="900" src="https://datastudio.google.com/embed/reporting/c37c803a-113d-45c5-8d9d-f7724e938970/page/wVldC" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
                    </div>
                )
            }
        },
        {
            id: 3,
            title: 'Transportation',
            statistics: [
                'Number of Registered Electric Vehicles, 2021',
                'Number of Registered Vehicles per 100 Residents (2019)',
                'Percentage of People that Drive Alone to Work, 2019',
                'Percentage of People that Carpool, Use Public Transportation, or Walk to Work, 2019'
            ],
            Iframe: () => {
                return(
                    <div className='box'>
                        <iframe width="1200" height="900" src="https://datastudio.google.com/embed/reporting/cc1c79e2-33c1-4911-8315-59a16e64769e/page/eIldC" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
                    </div>
                )
            }
        },
        {
            id: 4,
            title: 'HouseHold',
            statistics: [
                'Average Number of Gallons of Water Used per Day per Household',
                'Average Household Kilowatt Hours of Energy Consumed per Month',
                'Percentage of Common Containers and Packaging Materials Recycled',
                'Metric Tons of New Landfill Waste, 2019'
            ],
            Iframe: () => {
                return(
                    <div className='box'>
                        <iframe width='1200' height='900' src="https://datastudio.google.com/embed/reporting/4cc67b45-cb9f-427f-aff2-c2b4610268f9/page/pdldC" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
                    </div>
    
                )
            }
        }
    ]
    return(
        <div>
            <h1 style={{textAlign: 'center'}} className='title is-1 block'>Welcome to EnviroView</h1>
            <div className='content'>
                <h2 className='title is-3 block'>How To Use EnviroView</h2>
                <p className='is-size-5'>EnviroView is an online environmental database tool designed for efficient and easy access to insightful information regarding the United States’ impact on the environment through four key categories: <a href='#nature'><b>Nature</b></a>, <a href='#energy'><b>Energy</b></a>, <a href='#transportation'><b>Transportation</b></a>, and <a href='#household'><b>Household</b></a>. Each category utilizes data from various public and governmental datasets to allow viewers to easily identify how states compare to each other in their positive and negative contributions to environmental sustainability.</p>
            
            
                <h2 className='title is-3 block'>Our Analysis</h2>
                <p className='is-size-5'>The collection of maps describes the current data on different environmental conditions in the United States. Displayed below are maps and graphs that represent four seperate subcategories: Transportation, Residential/Home, Energy, and Nature.</p>
                {info.map(piece => {
                    return(
                        <>

                            <h1 id={`${piece.title.toLowerCase()}`} style={{textAlign: 'left'}} className='title is-3 block'>{piece.title}</h1>
                            <h1 className='title is-4 block'>Statistics Analyzed</h1>
                            <p className='is-size-5'>
                            {piece.statistics.map(statistic => {
                                return(
                                     <>{statistic}<br /></>
                                )
                            })}
                            </p>
                            <piece.Iframe />
                        </>
                    )
                })}
                <h2 className='title is-3 block'>Sources Used</h2>
                <p className='is-size-5'>
                    <a href="https://www.valuepenguin.com/auto-insurance/car-ownership-statistics">ValuePenguin: Car Ownership Statistics (2021 Report)</a><br />
                    <a href="https://www.census.gov/acs/www/data/data-tables-and-tools/data-profiles/">United States Census Bureau: 2019 American Community Survey</a><br />
                    <a href="https://afdc.energy.gov/data/">United States Department of Energy: Alternative Fuels Data Center</a><br />
                    <a href="https://www.ncdc.noaa.gov/billions/mapping">National Oceanic and Atmospheric Administration: Billion-Dollar Weather and Climate Disasters Mapping</a><br/>
                    <a href="https://www.ncdc.noaa.gov/cag/statewide/time-series/48/tavg/12/12/1895-2019?base_prd=true&begbaseyear=1901&endbaseyear=2000">National Oceanic and Atmospheric Administration: Climate at a Glance</a><br/>
                    <a href="https://www.eia.gov/environment/emissions/state/">United States Energy Information Administration: Energy-Related CO2 Emission Data Tables</a><br/>
                    <a href="https://www.electricchoice.com/blog/electricity-on-average-do-homes/">ElectricChoice: How Much Electricity on Average Do Homes in Your State Use?</a><br/>
                    <a href="https://www.bigrentz.com/blog/which-states-produce-most-trash">BigRentz: American Wasteland - Which States Produce the Most Trash?</a><br/>
                    <a href="https://www.neefusa.org/weather-and-climate/weather/home-water-use-united-states">National Environmental Education Foundation: Home Water Use in the United States</a>
                </p>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src="files/Owen.jpg" alt="Placeholder image" style={{objectFit: 'contain'}} />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Owen Sizemore</p>
                                <p class="subtitle is-6">Computer Science at UNC Charlotte, North Carolina, United States</p>
                            </div>
                            </div>
                            <div>
                            <a href="https://www.linkedin.com/in/owensizemore/">
                                <i class="fab fa-linkedin" style={{fontSize: 26}} ></i>
                            </a>
                            <a href="https://github.com/owensizemore">
                                <i class="fab fa-github-square" style={{fontSize: 26}}></i>
                            </a>                 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                            <img src="[TODO]" alt="Placeholder image" style={{objectFit: 'contain'}} />
                            </figure>
                        </div>            
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">[TODO]</p>
                                <p class="subtitle is-6">[TODO]</p>
                            </div>
                            </div>

                            <div>
                            <a class="is-warning" href="[TODO]">
                                <i class="fab fa-linkedin" style={{fontSize: 26}} ></i>
                            </a>
                            <a href="[TODO]">
                                <i class="fab fa-github-square" style={{fontSize: 26}}></i>
                            </a>                
                            </div>              
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;