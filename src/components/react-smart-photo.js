import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import SmartPhoto from 'smartphoto';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.string,
    caption: PropTypes.string,
    group: PropTypes.string,
    items: PropTypes.array,
    smartOptions: PropTypes.object,
  };

  static defaultProps = {
    items: [],
    smartOptions: {
      useHistoryApi: false
    }
  };
  /*===properties end===*/

  componentDidMount() {
    const { group, smartOptions } = this.props;
    this._instance = new SmartPhoto(`.react-smart-photo-item[data-group="${group}"]`, smartOptions);
  }

  componentWillUnmount(){
    this._instance = null;
  }

  render(){
    const {
      className,
      group,
      items,
      smartOptions,
      ...props
    } = this.props;
    return (
      <section className={classNames('react-smart-photo',className)} {...props}>
        {
          items.map((item,index)=>{
            const { href, src, caption, id } = item;
            return (
              <a href={href}
                key = {index}
                className='react-smart-photo-item'
                data-caption={caption}
                data-id={id}
                data-group={group}>
                <img src={src} alt=""/>
              </a>
            )
          })
        }
      </section>
    );
  }
}
