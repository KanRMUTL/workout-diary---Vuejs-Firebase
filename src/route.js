import Vue from 'vue'
import VueRouter from 'vue-router'
import DiaryForm from './components/DiaryForm'
import DiaryCard from './components/DiaryCard'

const routes = [
      {
          path: '/diaries',
          component: DiaryCard,
     },
     {
          path: '/create',
          component: DiaryForm,
     }
]
export const router = new VueRouter ({routes: routes})

Vue.use(VueRouter)