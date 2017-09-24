import Start from './components/Start.vue'
import Portfolio from './components/Portfolio.vue'
import Stocks from './components/Stocks.vue'

export default [
  { path: '/', component: Start, name: 'home' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' },
  { path: '/stocks', component: Stocks, name: 'stocks' }
]
