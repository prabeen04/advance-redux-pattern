import { startActionTypes, successActionTypes, errorActionTypes } from "./createActionTypes"

const getInitialState = _ => ({
  isLoading: false,
  data: null,
  error: null,
})
export const createReducers = reducerName => (state = getInitialState(), action) => {
  const { type, payload } = action
  switch (type) {
    case startActionTypes(type):
      return {
        ...state,
        isLoading: true
      }
    case successActionTypes(type):
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: null
      }
    case errorActionTypes(type):
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