import store from '@/store/store';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/CallList',
        },
        {
            path: '*',
            component: () => import('@/views/ErrorPage.vue'),
        },
        {
            path: '/CallList',
            name: 'CallList',
            component: () => import('@/views/CallList.vue'),
        },
        {
            path: '/CallAdd',
            name: 'CallAdd',
            meta: { auth: true },
            component: () => import('@/views/CallAdd.vue'),
        },
        {
            path: '/NoteAdd',
            name: 'NoteAdd',
            meta: { auth: true },
            component: () => import('@/views/NoteAdd.vue'),
        },
        {
            path: '/NoteList',
            name: 'NoteList',
            component: () => import('@/views/NoteList.vue'),
        },
        {
            path: '/UserRegister',
            name: 'UserRegister',
            component: () => import('@/views/UserRegister.vue'),
        },
        {
            path: '/UserLogin',
            name: 'UserLogin',
            component: () => import('@/views/UserLogin.vue'),
        },
    ]
})

router.beforeEach((to, from, next) => {
        if (to.meta.auth && !store.state.isLogin) {
            alert('인증이 필요한 서비스입니다.');
            next('/UserLogin');
            return;
        }
        next();
    });