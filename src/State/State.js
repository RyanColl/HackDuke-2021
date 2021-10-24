import React from "react";
import { useParams } from "react-router";
import data from '../Data/data.json'
import Chart from 'chart.js';
import {enviroLabels} from '../Data/Utils/Utils'

const State = () => {
    let params = useParams()
    const config = {
        type: 'bar',
        data: data.filter(state => state.State === params.state),
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
    return(
        <div></div>
    )
}
export default State;