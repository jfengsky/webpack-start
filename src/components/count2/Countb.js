import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
class Countb extends Component {
  render() {
    return (
      <div>
        <h2>countb: {this.props.countb}</h2>
        <button onClick={this.props.add}> + </button>
        <button onClick={this.props.reduce}> - </button>
      </div>
    )
  }
}

Countb.propTypes = {}

const mapStateToProps = (state, ownProps) => ({
  countb: state.countb,
})

const mapDispatchToProps = dispatch => {
  return {
    add: (...args) => {
      dispatch({type: 'COUNTB_ADD'})
    },
    reduce: (...args) => {
      dispatch({type: 'COUNTB_REDUCE'})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Countb)

// export default Countb;
