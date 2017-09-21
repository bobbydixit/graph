import React from 'react';
import { connect } from 'react-redux';
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line   } from 'recharts'

const Graph = (props) => {
  return (
    <LineChart width={600} height={300} data={props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="adrequest" stroke="#8884d8" activeDot={{r: 8}}/>
    </LineChart>
  )
}

const mapStateToProps = state => ({
  data: state.graph.data
})

export default connect(mapStateToProps)(Graph)
