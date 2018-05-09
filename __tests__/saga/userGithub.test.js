import SagaTester from 'redux-saga-tester';
import rootSaga from '../../src/store/sagas';
import * as actions from '../../src/store/userActions';

const userResponse = {
  "login": "mauriciolucas22",
  "id": 20993303,
  "avatar_url": "https://avatars0.githubusercontent.com/u/20993303?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mauriciolucas22",
  "html_url": "https://github.com/mauriciolucas22",
  "followers_url": "https://api.github.com/users/mauriciolucas22/followers",
  "following_url": "https://api.github.com/users/mauriciolucas22/following{/other_user}",
  "gists_url": "https://api.github.com/users/mauriciolucas22/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mauriciolucas22/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mauriciolucas22/subscriptions",
  "organizations_url": "https://api.github.com/users/mauriciolucas22/orgs",
  "repos_url": "https://api.github.com/users/mauriciolucas22/repos",
  "events_url": "https://api.github.com/users/mauriciolucas22/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mauriciolucas22/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "I love Jesus Christ!\r\nI am developer in nodejs and javascript.",
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2016-08-12T15:02:35Z",
  "updated_at": "2018-04-20T16:41:03Z"
}

describe('Testing User Github SAGA', () => {
  let sagaTester = null;

  // executado toda vez antes de cada um dos tests
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(rootSaga);
  });

  it('can add user', async () => {
    // executa uma action do redux
    sagaTester.dispatch(actions.addUserRequest('mauriciolucas22'));

    await sagaTester.waitFor(actions.addUserSuccess().type);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(actions.addUserSuccess(userResponse));
  });
});