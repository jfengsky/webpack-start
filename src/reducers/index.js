import initialState from '../actions/initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTA_ADD':
      return Object.assign({}, state, {
        counta: ++state.counta,
      })
    case 'COUNTA_REDUCE':
      return Object.assign({}, state, {
        counta: --state.counta,
      })
    case 'COUNTB_ADD':
      return Object.assign({}, state, {
        countb: ++state.countb,
      })
    case 'COUNTB_REDUCE':
      return Object.assign({}, state, {
        countb: --state.countb,
      })
    default:
      return state
  }
}
