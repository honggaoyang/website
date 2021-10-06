import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/home/Home"
import about from "@/views/about/About"
import course from "@/views/course/Course"
import teacher from "@/views/teacher/Teacher"
import news from "@/views/news/News"
import contact from "@/views/contact/Contact"

Vue.use(Router)

// const home = () => import('@/views/home/Home')
// const about = () => import('@/views/about/About')
// const course = () => import('@/views/course/Course')
// const teacher = () => import('@/views/teacher/Teacher')
// const news = () => import('@/views/news/News')
// const contact = () => import('@/views/contact/Contact')

const routes = [
  { path: '', redirect: "/home" },
  { path: '/home', component: home },
  { path: '/about', component: about },
  { path: '/course', component: course },
  { path: '/teacher', component: teacher },
  { path: '/news', component: news },
  { path: '/contact', component: contact },
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
