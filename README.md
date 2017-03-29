# router-link-helper
vue.js router-link helper

[![NPM](https://nodei.co/npm/router-link-helper.png)](https://npmjs.org/package/router-link-helper)

## Installation
### NPM
`$ npm install --save vue-router-link`
or
`$ yarn install --save vue-router-link`

## Usage

```javascript
  import Vue from 'vue'

  const RouterLinkHelper = require('router-link-helper');
  Vue.use(RouterLinkHelper)

  // or register with custom router-link name
  Vue.use(RouterLinkHelper,{
    name:'my-link'
  })
```

```html
  <router-link-helper to="/bar" :_blank="['desktop','tablet']" > foo </router-link-helper>

  // or custom link

  <my-link to="/bar" :_blank="['desktop','tablet']" > foo </my-link>
```

## Props
you can use these props for router-link-helper:

| Prop Name | Default Value | Type | Description | Required |
| ------ | ------------- | ---- | ----------- | -------- |
| `_blank` | `none` | array | definition device name you want target "_blank" : desktop,tablet,mobile   | No |

## Options
you can use these props for router-link-helper:

| Prop Name | Default Value | Type | Description | Required |
| ------ | ------------- | ---- | ----------- | -------- |
| `name` | `router-link-helper` | string | custom router link name  | No |

## Development
To customize and develop the project you could use following npm commands:



#### To bundle and minify JS
```bash
  npm run prod
```



## License
router-link-helper is a free and open project developed and maintained by [Reza Haidari](https://github.com/RezaHaidari) at [INB Co.](http://inb-co.com), published under MIT license.



