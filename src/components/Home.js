import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Counta from './count1/Counta'

class Home extends Component {
  render() {
    const {counta} = this.props
    return <Counta counta={counta} />
  }
}

Home.propTypes = {}

export default Home
