import React from "react";
import { useParams } from "react-router";
import data from '../Data/data.json'
import Chart from 'chart.js';
import {enviroLabels, dataOptions} from '../Data/Utils/Utils'
import { Doughnut, Pie, Bar, Line, HorizontalBar } from 'react-chartjs-2';
import { plugins } from "pretty-format";
const State = () => {
    let params = useParams()
    const [state] = data.filter(state => state.State === params.state)
    const {one, two, three, four, five, six, seven, eight, nine, ten, 
        eleven, twelve, thirteen, fourteen, fifteen, sixteen} = state;
    const natureData = {
        labels: enviroLabels.nature,
        datasets: [
          {
            label: 'Nature',
            data: [five, six, seven],
            backgroundColor: dataOptions.bgColor,
            borderColor: dataOptions.borderColor,
            borderWidth: 1,
          },
        ],
      };
      const energyData = {
        labels: enviroLabels.energy,
        datasets: [
          {
            label: 'Energy',
            data: [eight, nine, ten, eleven, twelve],
            backgroundColor: dataOptions.bgColor,
            borderColor: dataOptions.borderColor,
            borderWidth: 1,
          },
        ],
      };
      const transportationData = {
        labels: enviroLabels.transportation,
        datasets: [
          {
            label: 'Transportation',
            data: [one, two, three, four],
            backgroundColor: dataOptions.bgColor,
            borderColor: dataOptions.borderColor,
            borderWidth: 1,
          },
        ],
      };
      const householdData = {
        labels: enviroLabels.household,
        datasets: [
          {
            label: 'Household',
            data: [thirteen, fourteen, fifteen, sixteen],
            backgroundColor: dataOptions.bgColor,
            borderColor: dataOptions.borderColor,
            borderWidth: 1,
          },
        ],
      };
    return(
        <div className='state-div'>
            <div className='nature-div box'>
                <table className='table block box'>
                    <thead><tr>{enviroLabels.nature.map(str => <th><span>{str}</span></th>)}</tr></thead>
                    <tbody>{[one, two, three].map(r => <td>{r}</td>)}</tbody>
                </table>
                <div className='charts box'>
                    <Pie style={{gridRow: '1/2', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={450}  data={natureData} />
                    <Bar style={{gridRow: '1/3', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false, indexAxis: 'y', plugins: {legend: {position: 'right'}}}} width={450}  height={300}  data={natureData} />
                    <Doughnut style={{gridRow: '2/3', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={450}  data={natureData} />
                   
                </div>
            </div>
            <div className='energy-div box'>
                <table className='table block box'>
                    <thead><tr>{enviroLabels.energy.map(str => <th><span>{str}</span></th>)}</tr></thead>
                    <tbody>{[four, five, six, seven, eight].map(r => <td>{r}</td>)}</tbody>
                </table>
                <div className='charts box'>
                    <Pie style={{gridRow: '1/2', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={energyData} />
                    <Bar style={{gridRow: '1/2', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={energyData} />
                    <Doughnut style={{gridRow: '2/3', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={energyData} />
                    <Line style={{gridRow: '2/3', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={energyData} /> 
                </div>
            </div>
            <div className='transportation-div box'>
                <table className='table block box'>
                    <thead><tr>{enviroLabels.transportation.map(str => <th><span>{str}</span></th>)}</tr></thead>
                    <tbody>{[nine, ten, eleven, twelve].map(r => <td>{r}</td>)}</tbody>
                </table>
                <div className='charts box'>
                    <Pie style={{gridRow: '1/2', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={transportationData} />
                    <Bar style={{gridRow: '1/2', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={transportationData} />
                    <Doughnut style={{gridRow: '2/3', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={transportationData} />
                    <Line style={{gridRow: '2/3', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={600}  data={transportationData} /> 
                </div>
            </div>
            <div className='household-div box'>
                <table className='table block box'>
                    <thead><tr>{enviroLabels.household.map(str => <th><span>{str}</span></th>)}</tr></thead>
                    <tbody>{[thirteen, fourteen, fifteen, sixteen].map(r => <td>{r}</td>)}</tbody>
                </table>
                <div className='charts box'>
                    <Pie style={{gridRow: '1/2', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={675}  data={householdData} />
                    <Bar style={{gridRow: '1/3', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={675}  data={householdData} />
                    <Doughnut style={{gridRow: '2/3', gridColumn: '1/2'}} options={{responsive: false, maintainAspectRatio: false}} width={675}  data={householdData} />
                    <Line style={{gridRow: '2/3', gridColumn: '2/3'}} options={{responsive: false, maintainAspectRatio: false}} width={675}  data={householdData} />
                </div>
                
            </div>
            
            
            
            
           
        </div>
    )
}
export default State;