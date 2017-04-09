import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import chatRobot from '@/components/chatRobot'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)

/*Vue.http.post.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}*/

Vue.http.options.emulateJSON = true;


export default new Router({
  routes: [
    {
      path: '/',
      name: 'chatRobot',
      component: chatRobot
    }
  ]
})
