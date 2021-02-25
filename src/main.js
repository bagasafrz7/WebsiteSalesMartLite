import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(AOS)

Vue.config.productionTip = false

// app.AOS = new AOS.INIT({ disable: 'phone' })
new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
