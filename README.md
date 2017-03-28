# router-link-helper
vue.js router-link helper

## Installation
### NPM
`$ npm install --save vue-router-link`
or
`$ yarn install --save vue-router-link`

## Usage

```javascript
  import Vue from 'vue'

  const RouterLinkHelper = require('router-link-helper');
  Vue.component(RouterLinkHelper.name, RouterLinkHelper)
```

```html
  <router-link-helper to="/bar" :_blank="['desktop','tablet']" > foo </router-link-helper>
```

## Props
you can use these props for router-link-helper:

| Prop Name | Default Value | Type | Description | Required |
| ------ | ------------- | ---- | ----------- | -------- |
| `_blank` | `none` | array | definition device name you want target "_blank" : desktop,tablet,mobile   | No |

## Development
To customize and develop the project you could use following npm commands:



#### To bundle and minify JS
```bash
  npm run prod
```



## License
router-link-helper is a free and open project developed and maintained by [Reza Haidari](https://github.com/RezaHaidari) at [INB Co.](http://inb-co.com), published under MIT license.



