import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/home';
import education from '@/views/education'
import experience from '@/views/experience'
import project from '@/views/project'
import cv from '@/views/cv'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/edu',
        name: 'edu',
        component: education,
    },
    {
        path: '/exp',
        name: 'exp',
        component: experience,
    },
    {
        path: '/proj',
        name: 'proj',
        component: project,
    },
    {
        path: '/cv',
        name: 'cv',
        component: cv,
    },
    ],
});