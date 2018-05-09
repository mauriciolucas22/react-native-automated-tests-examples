import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import api from '../../src/services/api';
import rootSaga from '../../src/store/sagas';
import * as actions from '../../src/store/userActions';

const userGithubFixture = require('./fixtures/userGithub.json');

describe('Testing User Github SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  // executado toda vez antes de cada um dos tests
  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosIntance);

    sagaTester.start(rootSaga);
  });

  it('can add user', async () => {
    apiMock.onGet('/users/mauriciolucas22').reply(200, userGithubFixture['/users/mauriciolucas22']);

    // executa uma action do redux
    sagaTester.dispatch(actions.addUserRequest('mauriciolucas22'));

    await sagaTester.waitFor(actions.addUserSuccess().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(actions.addUserSuccess(userGithubFixture['/users/mauriciolucas22']));
  });

  it('throws error when user doesnt exists', async () => {
    apiMock.onGet('/users/fail').reply(400);

    // executa uma action do redux
    sagaTester.dispatch(actions.addUserRequest('fail001010101010'));

    await sagaTester.waitFor(actions.addUserFailure().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(actions.addUserFailure());
  });
});