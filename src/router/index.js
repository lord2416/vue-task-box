// import Home from '@/components/Home'

const Home = () => import('@/components/Home')

export default [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
]
