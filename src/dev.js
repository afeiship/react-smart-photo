import './dev.scss';
import ReactSmartPhoto from './main';

/*===example start===*/

// install: npm install afeiship/react-smart-photo --save
// import : import ReactSmartPhoto from 'react-smart-photo'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-smart-photo">
        <ReactSmartPhoto ref='rc' group='a' items={[
          {
            href:'http://placeholder.qiniudn.com/180x180',
            src:'http://placeholder.qiniudn.com/80x80',
            id: '80'
          }
        ]} />

        <hr/>

        <ReactSmartPhoto ref='rc' group='0' items={[
          {
            href:'http://placeholder.qiniudn.com/180x180',
            src:'http://placeholder.qiniudn.com/80x80',
            id: '80'
          },
          {
            href:'http://placeholder.qiniudn.com/180x180',
            src:'http://placeholder.qiniudn.com/80x80',
            id: '80'
          },
          {
            href:'http://placeholder.qiniudn.com/180x180',
            src:'http://placeholder.qiniudn.com/80x80',
            id: '80'
          },
          {
            href:'http://placeholder.qiniudn.com/180x180',
            src:'http://placeholder.qiniudn.com/80x80',
            id: '80'
          }
        ]} />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
