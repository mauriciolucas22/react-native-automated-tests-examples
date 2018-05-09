import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../services/api';
import * as actions from './userActions';

function* addUserFromGithub(action) {
  const response = yield call(api.get, `/users/${action.playload.username}`);

  if (response.ok) {
    yield put(actions.addUserSuccess(response.data));
  } else {
    yield put(actions.addUserFailure());
  }
}

export default function* root(){
  yield [
    takeLatest('ADD_USER_REQUEST', addUserFromGithub),
  ];
}