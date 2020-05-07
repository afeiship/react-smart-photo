import ReactSmartPhoto from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactSmartPhoto
          name="g1"
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
          name="g2"
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
