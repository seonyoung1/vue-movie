import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: () => import('@/views/IndexPage'),
		},
		{
			path: '/now-playing',
			component: () => import('@/views/NowPage'),
		},
		{
			path: '/popular',
			component: () => import('@/views/PopularPage'),
		},
		{
			path: '/detail/:id',
			component: () => import('@/views/DetailPage'),
		},
		{
			path: '/search',
			component: () => import('@/views/SearchPage'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFound'),
		},
	],
});
