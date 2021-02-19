import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSmartPhoto from '../src/main';
import NxRandomAvatar from '@jswork/next-random-avatar';
import './assets/style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: NxRandomAvatar.women(5).map((item) => {
        return {
          id: '80',
          href: item,
          src: item
        };
      })
    };
  }
  render() {
    const { items } = this.state;
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-smart-photo">
        <ReactSmartPhoto
          name="g1"
          items={[
            {
              href: NxRandomAvatar.lego(),
              src: NxRandomAvatar.lego(),
              id: '80'
            }
          ]}
        />

        <hr />

        <ReactSmartPhoto name="g2" items={items} />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
