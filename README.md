# react-smart-photo
> The most easy to use responsive image viewer especially for mobile devices for react.

## installation
```shell
npm install -S @feizheng/react-smart-photo
```

## update
```shell
npm update @feizheng/react-smart-photo
```

## properties
| Name      | Type   | Required | Default | Description                                                     |
| --------- | ------ | -------- | ------- | --------------------------------------------------------------- |
| className | string | false    | -       | The extended className for component.                           |
| name      | string | false    | -       | The group name.                                                 |
| items     | array  | false    | []      | Image source set.                                               |
| options   | object | false    | -       | SmartPhoto options. see: https://github.com/appleple/SmartPhoto |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-smart-photo/dist/style.scss";
  @import "~smartphoto/scss/smartphoto.scss";

  // customize your styles:
  $react-smart-photo-options: ()
  ```
2. import js
  ```js
  import ReactSmartPhoto from '@feizheng/react-smart-photo';
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

  ```

## documentation
- https://afeiship.github.io/react-smart-photo/

## resources
- https://github.com/appleple/SmartPhoto
