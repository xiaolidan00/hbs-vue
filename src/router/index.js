import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/Login'
import Home from '@/components/page/Home'
var langType=window.navigator.language;
if(langType.indexOf('zh')>=0){
  window.localStorage.setItem('langType','zh');
}else{
  window.localStorage.setItem('langType','en');
}
Vue.prototype.getLangText=function(item){
var langType=window.localStorage.getItem('langType');
if(item){
if(langType=='en'){
  return  item.en?item.en:'--';
}else{
  return item.zh?item.zh:'--';
}
}else{
  return '--';
}
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})
