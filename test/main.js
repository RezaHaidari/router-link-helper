import Vue from 'vue'
import test from 'ava'
import main from '../src/main'
import install from '../src/install'


test('that is render a component', t =>{

   Vue.use(install)

   t.is(Vue.options.components['router-link-helper'].cid, 1)

})