const GAMiddleware = store => next => action => {
  if (action.meta.analytics) {
    console.log('GA called')
    return next(action)
  }
  return next(action)
}
export default GAMiddleware;