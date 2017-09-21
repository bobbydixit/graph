import * as Actions from '../actions/graph/actions'

const initialState = {
  startDate: undefined,
  endDate: undefined,
  requestingData: false,
  data: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.CHANGE_DATE: {
      const {startDate, endDate} = action;
      return Object.assign({}, state, {
        startDate,
        endDate
      })
    }
    case Actions.SUBMIT_DATES:
      return Object.assign({}, state, {
        requestingData: true,
        data: []
      })
    case Actions.QUERY_RECIEVED: {
      const {data} = action
      return Object.assign({}, state, {
        requestingData: false,
        data
      })
    }
    case Actions.QUERY_FAILED:
      return Object.assign({}, state, {
        requestingData: false
      })
    default:
      return state
  }
}
