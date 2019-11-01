import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyCrD5_DeF0I86njePbGFS0ySSWp76diEUE",
  authDomain: "login-fa79a.firebaseapp.com",
  databaseURL: "https://login-fa79a.firebaseio.com",
  projectId: "login-fa79a",
  storageBucket: "login-fa79a.appspot.com",
  messagingSenderId: "199363220717",
  appId: "1:199363220717:web:957d4a50a8becb6001e8e4"

};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});