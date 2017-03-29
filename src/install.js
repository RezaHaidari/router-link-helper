import helper from './main';

const RouterLinkHelper = {
  install(Vue, options) {
    Vue.component(helper.name, helper)
  }
};

console.log(RouterLinkHelper)

export default RouterLinkHelper;