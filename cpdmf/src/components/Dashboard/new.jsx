import React from 'react';
import './View.css';
import {Line} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';
import { Paper,Grid } from '@material-ui/core';


const state = {
  labels: ['2013','2014','2015','2016','2017','2018','2019','2020'],
  datasets: [
    {
      label: 'Members in CSSL',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const state1 = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}



function View() {
  return (
    <div className="root">
      
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className="paper">chart3</Paper>
        </Grid>  
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className="paper">
            <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
            />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className="paper">
          <Pie
          data={state1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
           </Paper>
        </Grid>  
      </Grid>
    </div>
  )
}

export default View;
