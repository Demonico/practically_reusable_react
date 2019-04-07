import React, { Component } from 'react'
import Proptypes from 'prop-types'

const AuthContext = React.createContext()

export default class AuthProvider extends Component {
static proptypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired
}
  constructor(props) {
    super(props)

    this.state = { isAuth: false }
  }

  // login = () => {}

  // logout = () => {}

  render() {
    const { children } = this.props
    return (
      <AuthContext.Provider>{children}</AuthContext.Provider>
    )
  }
}
