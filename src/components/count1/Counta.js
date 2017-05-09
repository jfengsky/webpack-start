import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
class Counta extends Component {
  render() {
    return (
      <div>
        <h2>counta: {this.props.counta}</h2>
        <button onClick={this.props.add}> + </button>
        <button onClick={this.props.reduce}> - </button>
      </div>
    )
  }
}

Counta.propTypes = {}

const mapStateToProps = (state, ownProps) => ({
  counta: state.counta,
})

const mapDispatchToProps = dispatch => {
  return {
    add: (...args) => {
      dispatch({type: 'COUNTA_ADD'})
    },
    reduce: (...args) => {
      dispatch({type: 'COUNTA_REDUCE'})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counta)
