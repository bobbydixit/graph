import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates';
import { changeDate } from '../../actions/graph/actionCreator'
import Button from './Button';
import 'react-dates/lib/css/_datepicker.css';
class HeaderSection extends React.Component {
  constructor() {
    super();
    this.changeDate = this.changeDate.bind(this);
    this.changeDateFocus = this.changeDateFocus.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
    this.state = {
      focusDate: undefined
    }
  }
  changeDate({ startDate, endDate }) {
    this.props.changeDate(startDate, endDate);
  }
  changeDateFocus(data) {
    this.setState((state)=> Object.assign({}, state, {
      focusDate: data
    }))
  }
  isOutsideRange(day) {
    const { startDate } = this.props;
    const { focusedInput } = this.state;
    if (focusedInput !== 'endDate') {
      return false;
    }
    const maximumEndDate = startDate.clone().add(3, 'months');
    return !isInclusivelyBeforeDay(day, maximumEndDate);
  }
  render() {
    const { startDate, endDate } = this.props;
    let error = '';
    if(!startDate || !endDate) {
      error = 'Please select a start and end date'
    }
    return(
    <div>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onDatesChange={this.changeDate} 
        focusedInput={this.state.focusDate}
        onFocusChange={this.changeDateFocus}
        enableOutsideDays
        isOutsideRange={this.isOutsideRange}
      />
      <Button error={error} />
      <br />
      <span style={{color: 'red'}}> {error} </span>
    </div>
    )
  }
}


const mapStateToProps = state =>({
  startDate: state.graph.startDate,
  endDate: state.graph.endDate
});

const mapDispatchToProps = dispatch => ({
  changeDate: (startDate, endDate) => dispatch(changeDate(startDate, endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSection);
