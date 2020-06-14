const SHOWSMALLMENU = 'app/SHOWSMALLMENU';
const initialState = {
  smallMenu: false
}
export default (state = initialState, action) => {
    switch (action.type) {
     case SHOWSMALLMENU:
      return {smallMenu: action.payload }
     default:
      return state
    }
}

export function toggleSideMenu(smallMenu) {
  return dispatch => {
    dispatch({ type: SHOWSMALLMENU, payload: smallMenu })
  }
}