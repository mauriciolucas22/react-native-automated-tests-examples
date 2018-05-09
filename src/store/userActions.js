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
    type: 'ADD_USER_SUCCESS',
    playload: {
      user,
    },
  }
}

export function addUserFailure() {
  return {
    type: 'ADD_USER_FAILURE',
  }
}