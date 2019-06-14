import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import MyPhotos from './views/MyPhotos/MyPhotos.vue'
import Activities from './views/Activities.vue';
import LoginPage from './views/LoginPage/LoginPage.vue'
import RegisterPage from './views/RegisterPage/RegisterPage.vue'
import ContactUsPage from './views/ContactUsPage/ContactUsPage.vue'
import BuyCarPage from './views/BuyCarPage/BuyCarPage.vue'
import Work from './views/Work.vue'
import NProgress from 'nprogress'
import Vacancies from './views/Vacancies.vue'
import Usloviya from './views/Usloviya.vue'
import ConditionsOfUse from './views/ConditionsOfUse.vue'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/rentcar',
      name:'rentcar',
      component:BuyCarPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/vacancies',
      name:'vacancies',
      component:Vacancies
    },
    {
      path:'/conditionsofuse',
      name:'conditions-of-use',
      component:ConditionsOfUse
    },
    {
      path:'/usloviya',
      name:'usloviya',
      component:Usloviya
    },
    {
      path:'/login',
      name:'login',
      component:LoginPage
    },
    {
      path:'/contactus',
      name:'contact-us',
      component:ContactUsPage
    },
    {
      path:'/register',
      name:'register',
      component:RegisterPage
    },
    {
      path:'/activities',
      name:'activities',
      component: Activities
    },
    {
      path:'/work',
      name:'work',
      component: Work
    },
    {
      path: '/',
      name: 'my-photos',
      component: MyPhotos,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],

})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthorized) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
export default router
