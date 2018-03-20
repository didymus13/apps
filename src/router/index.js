import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // {
    //   path: '/kids/math',
    //   name: 'math',
    //   component: MathForKids
    // },
    // {
    //   path: 'rpgs/dungeons-dragons/encounter-calculator',
    //   name: 'encounter-calculator',
    //   component: EncounterCalculator
    // }
  ]
})
