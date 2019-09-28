const GAMiddleware = store => next => action => {
  if (action.meta.analytics) {
    console.log('GA called')
    next(action)
  }
  next(action)
}
export default GAMiddleware;