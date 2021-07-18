import React from 'react';
import './View.css';
import {Line,Doughnut } from 'react-chartjs-2';
import {makeStyles, Paper,Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:30
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
  },
}));

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
      data: [65, 59, 80, 81, 56,70,80,40]
    }
  ]
}



const options = {
  maintainAspectRatio: false	// Don't maintain w/h ratio
}


function View() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper} elevation={3}>
            <div className="chart1">
            <Line
            data={state}
            width={200}
	          height={40}
            options={
              {options},
              {
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20,
              },
              legend:{
                display:true,
                position:'left'
              }
            }}
            />
            </div>
          
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
            chart2
            <Line
            data={state}
            width={100}
	          height={30}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'left'
              }
            }}
            />
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={3}>
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
                position:'left'
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
