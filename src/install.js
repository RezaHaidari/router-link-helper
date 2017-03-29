import helper from './main';

const RouterLinkHelper = {
  install(Vue, options) {
    let name = options.name || helper.name
    Vue.component(name, helper)
  }
};

console.log(RouterLinkHelper)

export default RouterLinkHelper;