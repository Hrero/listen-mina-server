import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../view/HelloWorld'
import BookList from '../view/BookList'
import BookEditor from '../view/BookEditor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/booklist',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/bookeditor',
      name: 'BookEditor',
      component: BookEditor
    }
  ]
})
