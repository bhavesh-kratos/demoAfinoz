import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import { fetchGitData } from '../actions/routines';
import { apiData } from '../api/apis';
/* WORKER SAGA */
function* testSaga(action) {
    try {
        const response = yield call(apiData, action.payload);
        yield put(fetchGitData.success(response));
    } catch (error) {
        yield put(fetchGitData.failure(error));
    }
}

/* WATCHER SAGA */
export default function* watchFetchGit() {
    // run fetchDataFromServer on every trigger action
    yield takeLatest(fetchGitData.TRIGGER, testSaga);
}
