/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and ts libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "./bootstrap";
import {createRouter, createWebHistory} from "vue-router";

// pages
import IndexComponent from "./components/IndexApp.vue";
import CatalogComponent from "./components/catalog.vue";
import OpenAnimeComponent from "./components/anime.vue";

// not found page and tech errors
import NotFoundComponent from "./components/other/404.vue";
import TechError from "./components/other/techError.vue";

// docs russian
import AuthorsRU from "./components/doc/authors_ru.vue";
import TermsRU from "./components/doc/terms_ru.vue";
import PrivacyPolicyRU from "./components/doc/privacy_policy_ru.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: IndexComponent,
        },
        {
            path: "/catalog",
            component: CatalogComponent,
        },
        {
            path: "/anime",
            component: OpenAnimeComponent,
        },
        {
            path: "/authors/ru",
            component: AuthorsRU,
        },
        {
            path: "/terms/ru",
            component: TermsRU,
        },
        {
            path: "/privacyPolicy/ru",
            component: PrivacyPolicyRU,
        },
        {
            path: "/:catchAll(.*)",
            component: NotFoundComponent,
        },
        {
            path: "/error",
            component: TechError,
        },
        {
            path: "/404",
            component: NotFoundComponent,
        },
    ],
});

export default router;

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

// const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

// app.mount('#app');
