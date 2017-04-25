import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import AboutPage from '@/page/AboutPage'
import SponsorPage from '@/page/SponsorPage'
import StatementPage from '@/page/StatementPage'
import JuryPage from '@/page/JuryPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/jury',
      component: JuryPage
    },
    {
      path: '/sponsors',
      component: SponsorPage
    },
    {
      path: '/why',
      component: StatementPage
    },
    {
      path: '*',
      redirec: '/'
    }
  ]
})
