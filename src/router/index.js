import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '../views/Todo.vue'
import ColorCard from '../components/Card/ColorCard.vue'
import Preview from '../views/Preview.vue'
import WebPage from '../views/WebPage.vue'
import NewWin from '../views/NewWin.vue'
import Setting from '../views/Setting.vue'
import TodoPage from '../views/TodoPage.vue'

import XView from '../views/XView.vue'
import ButtonView from '../views/ButtonView'

const routes = [
  {
    path: '/',
    redirect: '/xview'
  },
  {
    path: '/todopage',
    name: 'TodoPage',
    component: TodoPage
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/webpage',
    name: 'WebPage',
    component: WebPage
  },
  {
    path: '/newwin',
    name: 'NewWin',
    component: NewWin
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/card',
    name: 'ColorCard',
    component: ColorCard
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/finished',
    name: 'Finished',
    component: () => import(/* webpackChunkName: "finished" */ '../views/Finished.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  },
  {
    path: '/xview',
    name:'XView',
    component:XView,
    children:[
      {
        path: 'button-view',
        name: 'ButtonView',
        component: ButtonView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
