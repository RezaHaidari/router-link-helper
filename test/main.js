import Vue from 'vue'
import test from 'ava'
import main from '../src/main'
import install from '../src/install'


test('register a component', t =>{

   Vue.use(install,{name:"hello"})

   t.is(Vue.options.components['hello'].cid, 1)

})