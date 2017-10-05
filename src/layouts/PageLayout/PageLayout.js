import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Card, CardText } from 'material-ui/Card';
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <Card className='container text-center'>
    <h1>КНД Крым</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Главная</IndexLink>
    { ' . ' }
    <Link to={'/login'} activeClassName='page-layout__nav-item--active'>Авторизация</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </Card>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
