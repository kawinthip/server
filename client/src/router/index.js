import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
// Authen
import Login from '@/components/Login'
// Room
import RoomIndex from '@/components/Room/Index'
import RoomCreate from '@/components/Room/CreateRoom'
import RoomEdit from '@/components/Room/EditRoom'
import RoomShow from '@/components/Room/ShowRoom'
// Userbooking
import UserbookingIndex from '@/components/Userbooking/Index'
import UserbookingCreate from '@/components/Userbooking/CreateUserbooking'
import UserbookingEdit from '@/components/Userbooking/EditUserbooking'
import UserbookingShow from '@/components/Userbooking/ShowUserbooking'
//indexAdmin
import IndexAdmin from '@/components/IndexAdmin'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // Userbooking
    {
      path: '/userbookings',
      name: 'userbookings',
      component: UserbookingIndex
    },
    {
      path: '/userbooking/create',
      name: 'userbooking-create',
      component: UserbookingCreate
    },
    {
      path: '/userbooking/edit/:userbookingId',
      name: 'userbooking-edit',
      component: UserbookingEdit
    },
    {
      path: '/userbooking/:userbookingId',
      name: 'userbooking',
      component: UserbookingShow
    },
    // Room
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomIndex
    },
    {
      path: '/room/create',
      name: 'room-create',
      component: RoomCreate
    },
    {
      path: '/room/edit/:roomId',
      name: 'room-edit',
      component: RoomEdit
    },
    {
      path: '/room/:roomId',
      name: 'room',
      component: RoomShow
    },
    // admin
    {
      path: '/IndexAdmin',
      name: 'IndexAdmin',
      component: IndexAdmin
    },
  ]
})