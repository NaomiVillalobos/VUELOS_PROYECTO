import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueQRCodeComponent from 'vue-qrcode-component'
import Log from './assets/js/log.js'

Vue.config.productionTip = false
Vue.prototype.Log = Log;
Vue.use(VueSweetalert2)
Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')