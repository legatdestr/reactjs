import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import MenuList from './MenuList'

class MenuItem extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = { childHovered: false };

  }

  renderInnerList() {
    const {
      itemClass,
      listClass,
      items,
      open,
      clickItemCallback,
      triangleClassName,
      listHideDelay,
    } = this.props;

    return !items
      ? null
      : (
        <MenuList
          listClass={listClass}
          itemClass={itemClass}
          show={open}
          inner
          clickItemCallback={clickItemCallback}
          triangleClassName={triangleClassName}
          listHideDelay={listHideDelay}
          items={items}
        />
      );
  }

  renderTriangle() {
    const { items, triangleClassName } = this.props;

    return !items
      ? null
      : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className={triangleClassName}
          viewBox="0 0 12 12"
        >
          <path d="M11 6L3.5 10.33L3.5 1.67z" fill="#000000" />
        </svg>
      );
  }

  render() {
    const { itemClass, text, items, link } = this.props;
    const parentClassName = itemClass + '_parent'

    if (!items) {
      return (
        <Link // eslint-disable-line jsx-a11y/no-static-element-interactions
          onClick={this.handleClick}

          className={itemClass}
          to={link}
        >
          { text }
        </Link>
      )
    }

    return (
      <div className={[itemClass, parentClassName].join(' ')}>
        { text }
        { this.renderTriangle() }
        { this.renderInnerList() }
      </div>
    );
  }
}

MenuItem.propTypes = {
  name: PropTypes.string,
  items: PropTypes.array,
  triangleClassName: PropTypes.string,
  open: PropTypes.bool,
  clickItemCallback: PropTypes.func,
  itemClass: PropTypes.string,
  listClass: PropTypes.string,
  text: PropTypes.string,
  listHideDelay: PropTypes.number,
};

export default MenuItem;