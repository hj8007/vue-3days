import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixin'
import i18nPlugin from './plugins/i18n'
import i18nStrings from './i18n/default'
import VueSweetalert2 from 'vue-sweetalert2'

import './assets/css/style.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import Datepicker from 'vue3-date-time-picker'
import 'vue3-date-time-picker/dist/main.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(i18nPlugin, i18nStrings)
app.use(VueSweetalert2)
app.component('Datepicker', Datepicker)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('keydown', (e) => {
      if (
        !(
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          e.keyCode === 8 ||
          e.keyCode === 46 ||
          e.keyCode === 37 ||
          e.keyCode === 39
        )
      ) {
        e.preventDefault()
      }
    })
  }
})

app.directive('float', {
  mounted(el) {
    el.addEventListener('keydown', (e) => {
      if (
        !(
          (e.keyCode >= 48 && e.keyCode <= 57) ||
          e.keyCode === 8 ||
          e.keyCode === 46 ||
          e.keyCode === 37 ||
          e.keyCode === 39 ||
          e.keyCode === 110 ||
          e.keyCode === 190
        )
      ) {
        e.preventDefault()
      }
    })
  }
})

app.mount('#app')
