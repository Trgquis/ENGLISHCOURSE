import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboardManage'
import course from '../pages/master/courseManage'
import contact from '../pages/master/contactManage'
import login from '../pages/loginUser'
import Regrist from '../pages/RegristUser'
import HomePage from '../pages/HomePage'
import DisplayCourse from '../pages/DisplayCourse'
import about from '../pages/AboutUs.vue'
  const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: dashboard,
      
    },
    {
        name: 'Course',
        path: '/course',
        component: course,
        
    },
    {
        name: 'Contact',
        path: '/contact',
        component: contact,
        
    },
    {
        name: 'Login',
        path: '/login',
        component: login
    },
    {
        name: 'Regrist',
        path: '/regrist',
        component: Regrist
    },
    {
        name: 'Home',
        path: '/homepage',
        component: HomePage
    },
    {
        name: 'GetCourse',
        path: '/getCourses',
        component: DisplayCourse
    },
    {
        name: 'about',
        path: '/aboutUs',
        component: about
    },
    
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  