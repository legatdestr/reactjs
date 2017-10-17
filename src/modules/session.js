// ------------------------------------
// Constants
// ------------------------------------

export const SESSION_LOGIN_SUCCESS = 'SESSION_LOGIN_SUCCESS'
export const SESSION_LOGIN_FAIL = 'SESSION_LOGIN_FAIL'
export const SESSION_LOGOUT_SUCCESS = 'SESSION_LOGOUT_SUCCESS'
export const SESSION_LOGOUT_FAIL = 'SESSION_LOGOUT_FAIL'

const user = {
  name: 'Мистер Смитт',
  id: 1
}

// ------------------------------------
// Actions
// ------------------------------------

export function loginSuccess (value) {
  return {
    type: SESSION_LOGIN_SUCCESS,
    payload: value
  }
}

export function loginFail (value) {
  return {
    type: SESSION_LOGIN_FAIL,
    payload: value
  }
}

export const loginAsync = (loginObj) => {
  return dispatch => {

    setTimeout(() => {
      let loginToken = 'just.a.mocked.token'

      if (loginToken !== 'invalid') {
        dispatch(loginSuccess({
          token: loginToken,
          userName: user.name,
          userId: user.id
        }))
      } else {
        dispatch(loginFail())
      }
    }, 500)
  }
}

export function logoutSuccess (value) {
  return {
    type: SESSION_LOGOUT_SUCCESS,
    payload: value
  }
}

export function logoutFail (value) {
  return {
    type: SESSION_LOGOUT_FAIL,
    payload: value
  }
}

export const logoutAsync = (token) => {
  return async (dispatch, getState) => {
    let response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 200)
    }).then(() => {
      if (true) {
        return 'none'
      } else {
        return 'invalid'
      }
    })
  }
}

export const actions = {
  loginSuccess,
  loginFail,
  loginAsync,
  logoutSuccess,
  logoutFail,
  logoutAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SESSION_LOGIN_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      loginToken: action.payload.token,
      isNotLoggedIn: false,
      userName: action.payload.userName,
      userId: action.payload.userId
    })
  },
  [SESSION_LOGIN_FAIL]: (state, action) => {
    return Object.assign({}, state, {
      /* Какая-нибудь обработка ошибок */
    })
  },
  [SESSION_LOGOUT_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      loginToken: null,
      isNotLoggedIn: true,
      userName: '',
      userId: null
    })
  },
  [SESSION_LOGOUT_FAIL]: (state, action) => {
    return Object.assign({}, state, {
      /* Какая-нибудь обработка ошибок */
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  userName: '',
  userId: null,
  isNotLoggedIn: true,
  loginToken: null
}

export default function sessionReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}