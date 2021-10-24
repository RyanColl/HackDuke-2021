# Hack Duke 2021

## Owen Sizemore && Ryan Collicutt Present: [EnviroView](https://enviroview.web.app/)

![logo-colored-white](https://user-images.githubusercontent.com/25808675/138600262-7bcf4c97-3714-4b85-bca1-9fa8a02e6edb.png)

## Inspiration
We were inspired to create EnviroView out of our group's collective concern for the impact of human-driven climate change on the global environment and society as a whole. We believe that one of the best ways to motivate and empower people to take action towards reducing the impact of human-driven climate change is to educate them through real, insightful data that draws connections to where they live and what they do. We strove to create EnviroView as a way for users to view a snapshot of how their state, region or country is tackling the problems of human-driven climate change and identify what social and economic changes can be made to achieve greater progress.

## What it does
EnviroView is a web-based application that leverages data from various public and governmental environmental databases to provide visualizations of environmental data for the United States on a state-by-state basis. Our application's landing page contains four unique data visualizations for each of our key environmental categories: Nature, Energy, Transportation, and Household. Each category utilizes data from various public and governmental datasets to allow viewers to easily identify how states compare to each other in their positive and negative contributions to environmental sustainability. To view all of the data for a specific state, users can type a state's name into the search bar at the top of the page and will be redirected to that state's data visualization.

## How we built it
Our web app was created with React.js through programming in HTML, CSS, and JavaScript. The frontend design was created using Bulma, a modern CSS framework. Our data visualizations on our home page were created using Google Data Studio, while those on the individual state pages were created using react-chartjs-2, a React wrapper for Chart.js, a framework that allows for easy data visualization. The web app is hosted using Google Firebase.

## Challenges we ran into
One of our greatest initial changes was finding a proper method to display the data visualizations in a map form. We initially experimented with Tableau but ultimately chose to utilize Google Data Studio for our maps due to easier implementation on the web app. Another challenge faced was implemented react-chartjs-2 into our state data pages, which took a great deal of trial and error to reach the aesthetic and functional results we desired. 

## Accomplishments that we're proud of
We are proud of the fact that our web app leverages a large amount of environmental data to provide truly relevant and useful information for our users. We spent a great deal of time researching various public and governmental databases to shape our results into our four key categories. Additionally, we are proud of the overall design of our web app and our seamless interactions between React, Bulma and Data Studio. 

## What we learned
Through the development of our web app we have gained a much greater understanding of Google Data Studio and how to create various data visualizations in the form of maps, charts and graphs using both uploaded CSV or Excel data and live data from Google Sheets. We also improved our overall knowledge of React and how to implement data analysis into web apps through Google Data Studio and react-chartjs-2. In addition, we learned how to take advantage of CSS frameworks like Bulma to save time in frontend design.

## What's next for EnviroView
One idea discussed for the future of EnviroView would be to include environmental analysis for future time periods using our existing data and Artificial Intelligence and Machine Learning algorithms. This would allow users to view how their state, region or country will perform in the coming years as human-driven climate change becomes an increasingly greater threat to the natural world.

## https://enviroview.web.app/
