import * as Actions from './actions';

export function changeDate(startDate, endDate) {
  return { type: Actions.CHANGE_DATE, startDate, endDate };
}

export function submitDates() {
  return { type: Actions.SUBMIT_DATES }
}

export function queryRecieved(data) {
  return { type: Actions.QUERY_RECIEVED, data}
}
