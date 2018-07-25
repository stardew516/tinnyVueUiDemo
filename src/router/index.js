import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Buttons from '@/pages/Buttons'
import Cell from '@/pages/Cell'
import Folder from '@/pages/Folder'
import InputNum from '@/pages/InputNum'
import Inputs from '@/pages/Inputs'
import Loading from '@/pages/Loading'
import Page from '@/pages/Page'
import Popups from '@/pages/Popups'
import ProgressBar from '@/pages/ProgressBar'
import Stepbar from '@/pages/Stepbar'
import Switchs from '@/pages/Switchs'
import Tabbar from '@/pages/Tabbar'
import Toast from '@/pages/Toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/Index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/folder',
      name: 'Folder',
      component: Folder
    },
    {
      path: '/inputNum',
      name: 'InputNum',
      component: InputNum
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: Inputs
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/popups',
      name: 'Popups',
      component: Popups
    },
    {
      path: '/progressBar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/stepbar',
      name: 'Stepbar',
      component: Stepbar
    },
    {
      path: '/switchs',
      name: 'Switchs',
      component: Switchs
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }
  ]
})
