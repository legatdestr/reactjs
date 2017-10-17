import React from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MenuList from './Menu/MenuList'

const mapStateToProps = (state) => ({
  userName: state.session.userName
})

const items = [
  {
    text: 'Главная',
    name: 'home',
    link: '/login'
  },
  {
    text: 'О нас',
    name: 'about',
    items: [{
      text: 'История',
      name: 'history',
      items: [
        {
          text: 'Основоположники',
          name: 'base',
          link: '/login'
        },
        {
          text: 'Основоположники',
          name: 'base',
          link: '/login'
        },
        {
          text: 'Основоположники',
          name: 'base',
          link: '/login'
        },
        {
          text: 'Основоположники',
          name: 'base',
          link: '/login'
        }
      ]
    }]
  }
];

class Header extends React.Component {
  static propTypes = {
    userName: PropTypes.string.isRequired
  }

  render () {
    const { userName } = this.props
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <IndexLink className="logo" to="/">React app</IndexLink>
            <MenuList
              items={items}
            />
        </div>

        <div className="top-bar-right">
          <div className="user-info">Вы зашли как: { userName }</div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header)
