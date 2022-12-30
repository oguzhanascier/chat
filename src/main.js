import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'
import store from './store'
import './assets/main.css'

let app;
auth.onAuthStateChanged(()=> {
    if(!app){
        app=createApp(App).use(store).use(router).mount('#app')
    }
})

