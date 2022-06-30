import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '../views/Todo.vue'
import ColorCard from '../components/Card/ColorCard.vue'
import Preview from '../views/Preview.vue'
import WebPage from '../views/WebPage.vue'
const routes = [
  {
    path: '/webpage',
    name: 'WebPage',
    component: WebPage
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
