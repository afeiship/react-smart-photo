import ReactSmartPhoto from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-smart-photo">
        <ReactSmartPhoto
          ref="rc"
          group="g1"
          items={[
            {
              href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              id: '80'
            }
          ]}
        />

        <hr />

        <ReactSmartPhoto
          ref="rc"
          group="g2"
          items={[
            {
              href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              id: '80'
            },
            {
              href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              id: '80'
            },
            {
              href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              id: '80'
            },
            {
              href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              src: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg',
              id: '80'
            }
          ]}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
