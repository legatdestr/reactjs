import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  session: state.session
})

class EnsureLoggedInContainer extends React.Component {
  componentWillMount() {
    if (this.props.session.isNotLoggedIn) {
      browserHistory.push("/login")
    }
  }

  render() {
    return this.props.children
  }
}

export default connect(mapStateToProps)(EnsureLoggedInContainer)