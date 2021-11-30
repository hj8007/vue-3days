import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import DataBindingString from '../views/1_databinding/DataBindingString.vue'
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
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingString.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtml.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInput.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelect.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadio.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckbox',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckbox.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingList.vue'
      )
  },
  {
    path: '/databinding/listserver',
    name: 'DataBindingListServer',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListServer.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttribute.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyle',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyle.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClass.vue'
      )
  },
  {
    path: '/databinding/userdetail',
    name: 'UserDetail',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/UserDetail.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClick.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChange.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKey.vue'
      )
  },
  {
    path: '/event/blur',
    name: 'EventBlur',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventBlur.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIf',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/RenderingIf.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShow',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/RenderingShow.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'Computed',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/Computed.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'Watch',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/Watch.vue'
      )
  },
  {
    path: '/reuse/component1',
    name: 'ReuseComponent',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/ReuseComponent.vue'
      )
  },
  {
    path: '/reuse/component2',
    name: 'ReuseComponent2',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/ReuseComponent2.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'Slot',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/Slot.vue'
      )
  },
  {
    path: '/advanced/provideinject',
    name: 'ProvideInject',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/ProvideInject.vue'
      )
  },
  {
    path: '/advanced/customdirective',
    name: 'CustomDirective',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/CustomDirective.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'Mixin',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/Mixin.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'Plugin',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/Plugin.vue'
      )
  },
  {
    path: '/vuex/store',
    name: 'StoreAccess',
    component: () =>
      import(
        /* webpackChunkName: "vuex", webpackPrefetch:true */ '../views/6_vuex/StoreAccess.vue'
      )
  },
  {
    path: '/assignment/usercreate',
    name: 'UserCreate',
    component: () =>
      import(
        /* webpackChunkName: "assignment", webpackPrefetch:true */ '../views/8_assignment/UserCreate.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // console.log(store.state.user)
  // if (store.state.user.userId || to.path.indexOf('/vuex/store') > -1) {
  //   next()
  // } else {
  //   next('/vuex/store')
  // }
  next()
})

router.afterEach((to, from) => {
  // console.log('from', from)
})

export default router
