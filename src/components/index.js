import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import SmartPhoto from 'smartphoto';

const CLASS_NAME = 'react-smart-photo';

export default class ReactSmartPhoto extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The group name.
     */
    name: PropTypes.string,
    /**
     * Image source set.
     */
    items: PropTypes.array,
    /**
     * SmartPhoto options. see: https://github.com/appleple/SmartPhoto
     */
    options: PropTypes.object
  };

  static defaultProps = {
    items: [],
    options: {
      useHistoryApi: false
    }
  };

  static instanceMap = {};

  componentDidMount() {
    const { name, options } = this.props;
    const selector = `.${CLASS_NAME}__item[data-group="${name}"]`;
    const _instance = ReactSmartPhoto.instanceMap[selector];
    ReactSmartPhoto.instanceMap[selector] = !_instance
      ? new SmartPhoto(selector, options)
      : _instance;
  }

  componentWillUnmount() {
    this._instance = null;
  }

  render() {
    const { className, name, items, options, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.map((item, index) => {
          const { href, src, caption, id } = item;
          return (
            <a
              href={href}
              key={index}
              className={`${CLASS_NAME}__item`}
              data-caption={caption}
              data-id={id}
              data-group={name}>
              <img src={src} alt="" />
            </a>
          );
        })}
      </div>
    );
  }
}
