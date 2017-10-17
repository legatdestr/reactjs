import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import './style.scss'

class MenuList extends React.Component {

  constructor(...args) {
    super(...args);

    this.state = {
      openItem: null,
      openItemPosition: null,
      listHideTimeout: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.show) {
      this.setState({
        openItem: null,
        openItemPosition: null,
      });
    }
  }

  getStyle() {
    const { position } = this.props;

    return position
      ? { top: position.top, left: position.left }
      : null;
  }

  renderItems() {
    const {
      listClass,
      itemClass,
      items,
      clickItemCallback,
      triangleClassName,
      listHideDelay,
    } = this.props;

    return items.map((item, i) => (
      <MenuItem
        key={i}
        open={this.state.openItem === i}
        number={i}
        clickItemCallback={clickItemCallback}
        triangleClassName={triangleClassName}
        itemClass={itemClass}
        listClass={listClass}
        listHideDelay={listHideDelay}
        text={item.text}

        {...item}
      />
    ));
  }

  render() {
    const { listClass, items, inner } = this.props;
    const innerListClassName = inner ? listClass + '_inner' : ''
    if (!items) {
      return null;
    }
    return (
      <div
        style={this.getStyle()}
        className={[listClass, innerListClassName].join(' ')}
      >
        { this.renderItems() }
      </div>
    );
  }
}

MenuList.defaultProps = {
  listClass: 'nav-menu',
  itemClass: 'nav-menu__item',
  triangleClassName: 'nav-menu__triangle',
  show: true
}

MenuList.propTypes = {
  items: PropTypes.array,
  show: PropTypes.bool,
  triangleClassName: PropTypes.string,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  clickItemCallback: PropTypes.func,
  listClass: PropTypes.string,
  itemClass: PropTypes.string,
  listHideDelay: PropTypes.number,
};

export default MenuList;