/**
 * saga.js
 *
 * This file contains the Saga function used to get data from the
 * service layer. The Saga function injects data into the Redux
 * store via the put function, which takes an action as a parameter.
 *
 * @see https://redux-saga.js.org/
 * @see https://decembersoft.com/posts/changing-react-route-programmatically-with-redux-saga/
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import request from 'utils/request';

import { DISPATCH_ACTIONS } from './constants';
import { getNumberSuccess, getNumberFailure } from './actions';

export function* getLuckyNumber({ entries }) {
  // TODO: What port is the service layer running on again?
  const requestUrl = `http://localhost:1337/lucky-number?username=${entries.userName}`;
  let result;
  try {
    result = yield call(request, requestUrl);

    const { luckyNumber } = result;

    const data = {
      luckyNumber,
      firstName: entries.firstName,
      lastName: entries.lastName
    };

    yield put(getNumberSuccess(data));
    yield put(push('/lucky'));
    // TODO: Do stuff with the result
  } catch (err) {
    // TODO: Bonus points for some error handling
    yield put(getNumberFailure(err)); // action
    // continue;
  }
}

export default function* sagaFunction() {
  yield takeLatest(DISPATCH_ACTIONS.GET_LUCKY_NUMBER, getLuckyNumber);
}
