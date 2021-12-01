import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n' //  i18n 플러그인 추가
import i18nStrings from './i18n/default'
import VueSweetalert2 from 'vue-sweetalert2'
import VueApexCharts from 'vue3-apexcharts'
// import VueApexCharts from 'vue3-apexcharts/dist/vue3-apexcharts.common'

import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-utilities.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'

// const i18nStrings = {
//   en: {
//     hi: 'Hello!'
//   },
//   ko: {
//     hi: '안녕하세요!'
//   }
// }

const app = createApp(App)
app.use(store)
app.use(router)

// app.directive('focus', {
//   mounted(el, binding) {
//     el.focus()
//   }
// })

// app.directive('blur', {
//   mounted(el, binding) {
//     if (binding.arg) {
//       el.addEventListener('blur', () => {
//         if (el.value === '') {
//           alert('필수 입력 값입니다.')
//         }
//       })
//     }
//   }
// })

// app.directive('number', {
//   mounted(el, binding) {
//     el.addEventListener('keydown', e => {
//       if (
//         !(
//           (e.keyCode >= 48 && e.keyCode <= 57) ||
//           e.keyCode === 8 ||
//           e.keyCode === 46 ||
//           e.keyCode === 37 ||
//           e.keyCode === 39
//         )
//       ) {
//         e.preventDefault()
//       }
//     })
//   }
// })

// app.directive('float', {
//   mounted(el, binding) {
//     el.addEventListener('keydown', e => {
//       if (
//         !(
//           (e.keyCode >= 48 && e.keyCode <= 57) ||
//           e.keyCode === 190 ||
//           e.keyCode === 8 ||
//           e.keyCode === 46 ||
//           e.keyCode === 37 ||
//           e.keyCode === 39
//         )
//       ) {
//         e.preventDefault()
//       }
//     })
//   }
// })

app.use(VueSweetalert2)
app.use(i18nPlugin, i18nStrings) // i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
app.use(VueApexCharts)
app.mixin(mixin)
app.mount('#app')

// window.Kakao.init('')
// window.Kakao.isInitialized()
