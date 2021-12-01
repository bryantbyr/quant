import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import factors from '../components/factors'
import Index from '../components/index'
import Login from '../components/login'
import Signin from '../components/signin'
import UserAdmin from '../components/userAdmin'
import UserInfo from '../components/userInfo'
import UserInfoEdit from '../components/userInfoEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/factors',
      name: 'factors',
      component: factors
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/userAdmin',
      name: 'userAdmin',
      component: UserAdmin
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/userInfoEdit',
      name: 'userInfoEdit',
      component: UserInfoEdit
    }
  ]
})
