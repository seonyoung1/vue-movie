<template>
	<header>
		<h1>
			<router-link to="/">movies</router-link>
		</h1>
		<nav>
			<router-link to="/now-playing"><span>now playing</span></router-link>
			<router-link to="/popular"><span>popular</span></router-link>
			<app-search></app-search>
		</nav>
	</header>
</template>

<script>
import AppSearch from '@/components/common/AppSearch';
export default {
	components: {
		AppSearch,
	},
};
</script>

<style scoped></style>
