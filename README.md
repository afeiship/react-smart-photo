# react-smart-photo
> The most easy to use responsive image viewer especially for mobile devices for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-smart-photo
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
  // or use sass
  @import "~smartphoto/scss/smartphoto.scss";
  @import "~@jswork/react-smart-photo/dist/style.scss";

  // customize your styles:
  $react-smart-photo-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactSmartPhoto from '@jswork/react-smart-photo';
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

  ```

## documentation
- https://afeiship.github.io/react-smart-photo/


## license
Code released under [the MIT license](https://github.com/afeiship/react-smart-photo/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-smart-photo
[version-url]: https://npmjs.org/package/@jswork/react-smart-photo

[license-image]: https://img.shields.io/npm/l/@jswork/react-smart-photo
[license-url]: https://github.com/afeiship/react-smart-photo/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-smart-photo
[size-url]: https://github.com/afeiship/react-smart-photo/blob/master/dist/react-smart-photo.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-smart-photo
[download-url]: https://www.npmjs.com/package/@jswork/react-smart-photo
