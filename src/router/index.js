import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const KidsMath = () => import('@/components/kids/math')
const KidsMathConfig = () => import('@/components/kids/math/Config')
const KidsMathAddition = () => import('@/components/kids/math/Addition')
const KidsMathSubtraction = () => import('@/components/kids/math/Subtraction')
const KidsMathMultiplication = () => import('@/components/kids/math/Multiplication')
const EncounterCalculator = () => import('@/components/EncounterCalculator')
const StarfinderEncounterCalculator = () => import('@/components/starfinder/EncounterCalculator')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kids/math',
      name: 'math',
      component: KidsMath,
      children: [
        {
          path: 'config',
          component: KidsMathConfig,
          name: 'math-config'
        },
        {
          path: 'addition',
          component: KidsMathAddition,
          name: 'math-addition'
        },
        {
          path: 'subtraction',
          component: KidsMathSubtraction,
          name: 'math-subtraction'
        },
        {
          path: 'multiplication',
          component: KidsMathMultiplication,
          name: 'math-multiplication'
        }
      ]
    },
    {
      path: '/rpgs/dungeons-dragons/encounter-calculator',
      name: 'encounter-calculator',
      component: EncounterCalculator
    },
    {
      path: '/rpgs/starfinder/encounter-calculator',
      name: 'starfinder-encounter-calculator',
      component: StarfinderEncounterCalculator
    }
  ]
})
