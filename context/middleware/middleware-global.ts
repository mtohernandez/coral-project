import { Middleware } from "redux";

export const threads: Middleware = (storeAPI) => (dispatch) => async (action) => {

  return dispatch(action);

}
