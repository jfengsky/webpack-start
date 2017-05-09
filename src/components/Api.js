import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Countb from './count2/Countb'

class Api extends Component {
  render() {
    const {countb} = this.props
    return <Countb countb={countb} />
  }
}

Api.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}
export default connect(mapStateToProps)(Api)
// export default Api
