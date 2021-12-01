import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ReuseComponent from '../views/4_reuse/ReuseComponent.vue'
import ReuseComponent2 from '../views/4_reuse/ReuseComponent2.vue'
import ReuseComponent3 from '../views/4_reuse/ReuseComponent3.vue'
import ControlChild from '../views/4_reuse/ControlChild.vue'
import ControlParent from '../views/4_reuse/ControlParent.vue'
import Slot from '../views/4_reuse/Slot.vue'
// import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingString.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtml.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInput.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckbox',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckbox.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadio.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelect.vue'
      )
  },
  {
    path: '/databinding/textarea',
    name: 'DataBindingTextarea',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingTextarea.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttribute.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClass.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyle.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingList.vue'
      )
  },
  {
    path: '/databinding/listserver',
    name: 'DataBindingListServer',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListServer.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventClick.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventChange.vue'
      )
  },
  {
    path: '/event/blur',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventBlur.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/2_event/EventKey.vue'
      )
  },
  {
    path: '/extra/renderingif',
    name: 'RenderingIf',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/RenderingIf.vue'
      )
  },
  {
    path: '/extra/renderingshow',
    name: 'RenderingShow',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/RenderingShow.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/Computed.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'Watch',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "event" */ '../views/3_extra/Watch.vue'
      )
  },
  {
    path: '/reuse/reusecomponent',
    name: 'ReuseComponent',
    component: ReuseComponent
  },
  {
    path: '/reuse/reusecomponent2',
    name: 'ReuseComponent2',
    component: ReuseComponent2
  },
  {
    path: '/reuse/reusecomponent3',
    name: 'ReuseComponent3',
    component: ReuseComponent3
  },
  {
    path: '/reuse/controlchild',
    name: 'ControlChild',
    component: ControlChild
  },
  {
    path: '/reuse/controlparent',
    name: 'ControlParent',
    component: ControlParent
  },
  {
    path: '/reuse/slot',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/advanced/mixin',
    name: 'Mixin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Mixin.vue'
      )
  },
  {
    path: '/advanced/custom',
    name: 'CustomDirective',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CustomDirective.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'Plugin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/Plugin.vue'
      )
  },
  {
    path: '/advanced/composition',
    name: 'CompositionAPI',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CompositionAPI.vue'
      )
  },
  {
    path: '/advanced/composition2',
    name: 'CompositionAPI2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CompositionAPI2.vue'
      )
  },
  {
    path: '/advanced/composition3',
    name: 'CompositionAPI3',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CompositionAPI3.vue'
      )
  },
  {
    path: '/advanced/composition4',
    name: 'CompositionAPI4',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CompositionAPI4.vue'
      )
  },
  {
    path: '/advanced/compositionprovide',
    name: 'CompositionAPIProvide',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "advanced" */ '../views/5_advanced/CompositionAPIProvide.vue'
      )
  },
  {
    path: '/vuex/store',
    name: 'StoreAccess',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "vuex" */ '../views/6_vuex/StoreAccess.vue'
      )
  },
  {
    path: '/materialmodal',
    name: 'MaterialModal',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "modal" */ '../components/erp/MaterialModal.vue'
      )
  },
  {
    path: '/template/listtodetail',
    name: 'ListToDetail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/ListToDetail.vue'
      )
  },
  {
    path: '/template/listtodetail2',
    name: 'ListToDetail2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/ListToDetail2.vue'
      )
  },
  {
    path: '/template/detail',
    name: 'Detail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Detail.vue'
      )
  },
  {
    path: '/template/detailedit',
    name: 'DetailEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/DetailEdit.vue'
      )
  },
  {
    path: '/template/multipleedit',
    name: 'MultipleEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/MultipleEdit.vue'
      )
  },
  {
    path: '/template/multipleedit2',
    name: 'MultipleEdit2',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/MultipleEdit2.vue'
      )
  },
  {
    path: '/template/masterdetail',
    name: 'MasterDetail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/MasterDetail.vue'
      )
  },
  {
    path: '/template/shuttle',
    name: 'Shuttle',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Shuttle.vue'
      )
  },
  {
    path: '/template/bulletin',
    name: 'Bulletin',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Bulletin.vue'
      )
  },
  {
    path: '/template/bulletindetail',
    name: 'BulletinDetail',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/BulletinDetail.vue'
      )
  },
  {
    path: '/template/singleviewedit',
    name: 'SingleViewEdit',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/SingleViewEdit.vue'
      )
  },
  {
    path: '/template/create',
    name: 'Create',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Create.vue'
      )
  },
  {
    path: '/template/chart',
    name: 'Chart',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/9_uitemplate/Chart.vue'
      )
  },
  {
    path: '/assignment/usercreate',
    name: 'UserCreate',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/8_assignment/UserCreate.vue'
      )
  },
  {
    path: '/assignment/vending',
    name: 'Vending',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/8_assignment/VendingMachine.vue'
      )
  },
  {
    path: '/assignment/restaurant',
    name: 'Restaurant',
    component: () =>
      import(
        /* webpackPrefetch:true, webpackChunkName: "uitemplate" */ '../views/8_assignment/Restaurant.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // if (store.state.user.userId || to.fullPath.indexOf('/vuex/store') > -1) {
  //   next()
  // } else {
  //   next('/vuex/store')
  // }
  next()
})

router.afterEach((to, from) => {
  console.log('from', from)
  // beforeEach, afterEach 활용하면 페이지마다 머문 시간을 DB에 기록할 수 있음
})

export default router
