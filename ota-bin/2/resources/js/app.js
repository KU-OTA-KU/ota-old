/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and ts libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import { createApp } from "vue";

import router from "./router";
import VueLazyload from 'vue-lazyload';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createHead } from '@vueuse/head';

const customDarkTheme= {
    dark: true,
    colors: {
        background: '#ffffff',
        surface: '#1E88E5',
        primary: '#0047ff',
        'primary-darken-1': '#7d798e',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#0337bc',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customDarkTheme',
        themes: {
            customDarkTheme,
        }
    }
})

const seoVueHead = createHead();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

import application from './components/_app.vue';
app.component('ota-ku-application', application);
app.use(seoVueHead);
app.use(router);
app.use(vuetify);
app.use(VueLazyload, {
    preLoad: 1.5,
    error: '/img/ts/error.png',
    loading: '/img/ts/loading.png',
    attempt: 2,
    lazyComponent : true,
    silent: true,
});
app.mount("#app");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


// import.meta.glob('./**/*.vue', { eager: true }).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */
