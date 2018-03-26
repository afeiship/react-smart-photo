# react-smart-photo
> The most easy to use responsive image viewer especially for mobile devices for react.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
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
  
```

## install && import:
```bash
npm install --save afeiship/react-smart-photo --registry=https://registry.npm.taobao.org
```
```jsx
import ReactSmartPhoto from 'react-smart-photo';
```

## usage:
```jsx

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

```

## customize style:
```scss
// customize your styles:
$react-smart-photo-options:(
);

@import 'node_modules/react-smart-photo/dist/style.scss';
```

## resources:
+ https://github.com/appleple/SmartPhoto


## todos:
- [ ] events
