export function addUserRequest(username) {
  return {
    type: 'ADD_USER_REQUEST',
    playload: {
      username,
    },
  }
}

export function addUserSuccess(user) {
  return {
    type: 'SUCCESS',
    playload: {
      user,
    },
  }
}

export function addUserFailure(username) {
  return {
    type: 'ADD_USER_FAILURE',
  }
}