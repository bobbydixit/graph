import graphSaga from './graphSaga';

function* rootSaga() {
  /* The saga is waiting for a action called FETCH_PATIENTS to be activated */
  yield [
    graphSaga()
  ];
}

export default rootSaga;
