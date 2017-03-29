import helper from './main';

const RouterLinkHelper = {
  install(Vue, options) {
    let name = options ? options.name || helper.name : helper.name
    Vue.component(name, helper)
  }
};

export default RouterLinkHelper;