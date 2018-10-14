import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('./views/Register.vue'),
		},
		{
			path: '/page/:id',
			name: 'page',
			component: () => import('./views/Page.vue'),
		},
		{
			path: '/404',
			name: '404',
			component: () => import('./views/404.vue'),
		},
		{
			path: '*',
			redirect: '/404',
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0};
	},
});
