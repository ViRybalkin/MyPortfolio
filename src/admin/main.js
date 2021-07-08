import Vue from 'vue';
import App from './App.vue';
import router from './pages/router'
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation,{mode:'manual'});

new Vue({
  router,
  el: "#app-root",
  render: h => h(App)
});