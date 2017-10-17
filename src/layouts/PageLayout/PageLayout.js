import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className="container">
    <Header />

    {children}

  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
