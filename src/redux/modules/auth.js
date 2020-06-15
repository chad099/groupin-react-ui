const FETCH_LOGIN_USER = 'auth/FETCH_LOGIN_USER';
const initialState = {
  user: null
}
export default (state = initialState, action) => {
    switch (action.type) {
     case FETCH_LOGIN_USER:
      return {user: action.payload }
     default:
      return state
    }
}

export function fetchLoginUser(prop) {
  return dispatch => {
    dispatch({ type: FETCH_LOGIN_USER, payload: prop })
  }
}