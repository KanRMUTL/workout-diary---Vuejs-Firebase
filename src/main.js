import Vue from 'vue'
import store from './store'
import App from './App.vue'
import firebase from 'firebase'
import {router} from './route'
import './vuematerial'

  const firebaseConfig = {
    apiKey: "AIzaSyCVlmPeTflfUmRfzJHklgKNnIczQ_IT45Y",
    authDomain: "workout-diary-41f78.firebaseapp.com",
    databaseURL: "https://workout-diary-41f78.firebaseio.com",
    projectId: "workout-diary-41f78",
    storageBucket: "workout-diary-41f78.appspot.com",
    messagingSenderId: "795260345902",
    appId: "1:795260345902:web:5a177143ee0681ccc9c9bf",
    measurementId: "G-YKB431N0P4"
  };

  firebase.initializeApp(firebaseConfig);
  export const db = firebase.database()
  export const database = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
