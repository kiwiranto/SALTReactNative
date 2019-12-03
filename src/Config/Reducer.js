export const SET_GLOBAL_DATA = "SET_GLOBAL_DATA";
export const SET_USER_DATA = "SET_USER_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const DELETE_TOKEN = "DELETE_TOKEN";

const defaultState = {
  globalData: {},
  userData: {},
  dashboardData: {}
};

const appReducer = (state = defaultState, action) => {
  let _state;
  
  switch (action.type) {
    case SET_GLOBAL_DATA:
      _state = {
        ...state,
        globalData: action.globalData
      };
      break;
    case SET_USER_DATA:
      _state = {
        ...state,
        userData: action.userData
      };
      break;
    case DELETE_TOKEN:
      delete state.globalData.token
      break;
    // case CLEAR_DATA:
    //   _state = {
    //     ...defaultState,
    //     globalData: {
    //       username: _state.globalData.username,
    //       password: _state.globalData.password
    //     }
    //   }
    //   break;
  }

  state = { ...state, ..._state }

  return state;
};

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export { defaultState, rootReducer };
