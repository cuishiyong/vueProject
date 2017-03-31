import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/app.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
