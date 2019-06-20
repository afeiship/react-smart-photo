import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import SmartPhoto from 'smartphoto';

const CLASS_NAME = 'react-smart-photo';

export default class ReatSmartPhoto extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    group: PropTypes.string,
    items: PropTypes.array,
    smartOptions: PropTypes.object
  };

  static defaultProps = {
    items: [],
    smartOptions: {
      useHistoryApi: false
    }
  };
  /*===properties end===*/

  static instanceMap = {};

  componentDidMount() {
    const { group, smartOptions } = this.props;
    const selector = `.${CLASS_NAME}-item[data-group="${group}"]`;
    const _instance = ReatSmartPhoto.instanceMap[selector];
    ReatSmartPhoto.instanceMap[selector] = !_instance
      ? new SmartPhoto(selector, smartOptions)
      : _instance;
  }

  componentWillUnmount() {
    this._instance = null;
  }

  render() {
    const { className, group, items, smartOptions, ...props } = this.props;
    return (
      <section className={classNames(CLASS_NAME, className)} {...props}>
        {items.map((item, index) => {
          const { href, src, caption, id } = item;
          return (
            <a
              href={href}
              key={index}
              className={`${CLASS_NAME}__item`}
              data-caption={caption}
              data-id={id}
              data-group={group}>
              <img src={src} alt="" />
            </a>
          );
        })}
      </section>
    );
  }
}
