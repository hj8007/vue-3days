import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import DataBindString from '../views/1_databinding/DataBindingString'

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
    path: '/user/create',
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

export default router
