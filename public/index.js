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
          group="a"
          items={[
            {
              href: 'http://avatar.chsword.net/avatar/1',
              src: 'http://avatar.chsword.net/avatar/1',
              id: '80'
            }
          ]}
        />

        <hr />

        <ReactSmartPhoto
          ref="rc"
          group="0"
          items={[
            {
              href: 'http://avatar.chsword.net/avatar/1',
              src: 'http://avatar.chsword.net/avatar/1',
              id: '80'
            },
            {
              href: 'http://avatar.chsword.net/avatar/1',
              src: 'http://avatar.chsword.net/avatar/1',
              id: '80'
            },
            {
              href: 'http://avatar.chsword.net/avatar/1',
              src: 'http://avatar.chsword.net/avatar/1',
              id: '80'
            },
            {
              href: 'http://avatar.chsword.net/avatar/1',
              src: 'http://avatar.chsword.net/avatar/1',
              id: '80'
            }
          ]}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
