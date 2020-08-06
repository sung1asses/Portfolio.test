/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Layout
import App from './components/AppComponent.vue';
//Routes
import Home from './components/HomeComponent.vue';
import Projects from './components/ProjectsComponent.vue';
import Knowledge from './components/KnowledgeComponent.vue';
import Pricing from './components/PricingComponent.vue';
import Contact from './components/ContactComponent.vue';

// errors
import Error404 from './components/errors/Error404Component.vue';

const router = new VueRouter({
    mode: 'history',
    base: "/",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/knowledge',
            name: 'knowledge',
            component: Knowledge
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: Pricing
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/*',
            name: 'Error404',
            component: Error404
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});