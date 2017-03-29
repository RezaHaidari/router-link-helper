import helper from './main';

const RouterLinkHelper = {
  install(Vue, options) {
    let name = options.name || helper.name
    Vue.component(name, helper)
  }
};

export default RouterLinkHelper;