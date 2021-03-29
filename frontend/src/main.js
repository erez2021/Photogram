import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import "./assets/styles/main.scss"
import { EmojiPickerPlugin } from 'vue-emoji-picker'

Vue.use(EmojiPickerPlugin)
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAaio-UIw-8MZ7bNW7yIv2Rwfdu6ExkW3E',
    libraries: 'places, drawing, visualization',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
