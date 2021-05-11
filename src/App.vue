<template>
	<div id="app">
		<app-header></app-header>
		<div id="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from './components/common/AppHeader';
export default {
	name: 'App',
	components: {
		AppHeader,
	},
};
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
