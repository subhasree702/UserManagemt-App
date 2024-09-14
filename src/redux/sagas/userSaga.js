import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  incrementPage,
  refreshUsers,
} from '../slices/userSlice';

const fetchUsersApi = (page) => axios.get(`https://randomuser.me/api/?results=10&page=${page}`);

function* fetchUsersSaga() {
  try {
    const page = yield select((state) => state.user.page);
    const response = yield call(fetchUsersApi, page);
    yield put(fetchUsersSuccess(response.data.results));
    yield put(incrementPage());
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
}
