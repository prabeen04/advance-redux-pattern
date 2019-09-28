import { startActionTypes, successActionTypes, errorActionTypes } from "./createActionTypes"

export const createAction = (reducerName, asyncFunc) =>
  async (getState, dispatch) => {
    dispatch({ type: startActionTypes(reducerName) })
    try {
      const data = await asyncFunc()
      dispatch({
        type: successActionTypes(reducerName),
        payload: { data }
      })
    } catch (error) {
      dispatch({
        type: errorActionTypes(reducerName),
        payload: { error }
      })
    }
  }