import { startActionTypes, successActionTypes, errorActionTypes } from "./createActionTypes"

const getInitialState = _ => ({
  isLoading: false,
  data: null,
  error: null,
})
export const createReducers = reducerName => (state = getInitialState(), action) => {
  const { type, payload } = action
  switch (type) {
    case startActionTypes(reducerName):
      return {
        ...state,
        isLoading: true
      }
    case successActionTypes(reducerName):
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: null
      }
    case errorActionTypes(reducerName):
      return {
        ...state,
        isLoading: false,
        data: null,
        error: payload.error
      }
    default:
      return state
  }
}