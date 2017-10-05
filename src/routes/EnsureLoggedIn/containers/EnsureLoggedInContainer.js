import React from 'react'
import { browserHistory } from 'react-router'

class EnsureLoggedInContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  componentWillMount() {
    if (!this.state.isLoggedIn) {
      browserHistory.push("/login")
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      console.log('enter')
      return this.props.children
    } else {
      return null
    }
  }
}

export default EnsureLoggedInContainer