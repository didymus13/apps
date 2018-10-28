// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VuexI18n from 'vuex-i18n'

Vue.use(VuexI18n.plugin, store)
Vue.config.productionTip = false

Vue.i18n.add('en', require('./lang/en.json')) // Load translations from external file
Vue.i18n.add('fr', require('./lang/fr.json'))
Vue.i18n.set('fr')

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
