import {  call, takeLatest, put, select } from 'redux-saga/effects';
import moment from 'moment';
import * as Actions from '../actions/graph/actions';
import * as ActionCreators from '../actions/graph/actionCreator';
import * as Api from '../services/graph'
function* submitDates() {
  try {
    const startDate = moment(yield select(state => state.graph.startDate)).format('YYYY-MM-DD');
    const endDate = moment(yield select(state => state.graph.endDate)).format('YYYY-MM-DD');
    const usage = (yield call(Api.getUsage, {
      from: startDate,
      to: endDate
    })).data;
    yield put(ActionCreators.queryRecieved(usage.data));
  } catch (e) {
    console.error(e, 'catch block of watchPatientFetch');
  }
}
export default function* patientHeaderSaga() {
  yield [
    // Only the latest is taken, all others would be ignored/cancelled
    takeLatest(Actions.SUBMIT_DATES, submitDates)
  ];
}
