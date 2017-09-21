import React from 'react';
import {connect} from 'react-redux';
import style from './buttonStyle.less'
import { submitDates} from '../../actions/graph/actionCreator'

const Button = (props) => (
  <button className={style.styledbutton} disabled={Boolean(props.error || props.requestingData)} type="button" onClick={props.submitDates} >Submit </button>
);

const mapStateToProps = state => ({
  requestingData: state.graph.requestingData
})
const mapDispatchToProps = dispatch => ({
  submitDates: () => dispatch(submitDates())
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)
