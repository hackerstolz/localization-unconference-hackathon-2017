import Vue from 'vue'
import Router from 'vue-router'

import AboutPage from '@/page/AboutPage'
import SponsorPage from '@/page/SponsorPage'
import StatementPage from '@/page/StatementPage'
import SchedulePage from '@/page/SchedulePage'
import JuryPage from '@/page/JuryPage'
import LandingPage from '@/page/LandingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: LandingPage
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
      path: '/schedule',
      component: SchedulePage
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
      redirect: '/'
    }
  ]
})
