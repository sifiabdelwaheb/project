import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import packages from './package';
import similaritys from './similarity';
import moteurs from './moteur';
import language from './language';
import profilings from './profiling';
import sentiments from './sentiment';
const sagas = [
  ...auth,
  ...packages,
  ...language,
  ...similaritys,
  ...moteurs,
  ...profilings,
  ...sentiments,
];
function* rootSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
export default rootSaga;
