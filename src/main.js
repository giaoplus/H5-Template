import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { getActivity } from './utils'
import {
  Button
} from 'vant'

const app = createApp(App)
const vantComponents = [
  Button
]

router.beforeEach((to, from, next) => {
  if(!to.name || !router.hasRoute(to.name)){
    const [activity, route] = getActivity()
    for(let r of route) {
      router.addRoute(r)
    }
    if(to.path !== '/'){
      next({...to, replace: true})
    }else{
      next({ path: '/' })
    }
  }else{
    next()
  }
})

vantComponents.forEach(component => {
  app.use(component)
})

app.use(router)

app.mount('#app')