<template>
	<form class="search" @submit.prevent="onSubmit">
		<input type="text" class="search_text" v-model="word" />
		<button type="button" class="search_btn">
			<font-awesome-icon :icon="['fas', 'search']" />
		</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			word: '',
		};
	},
	methods: {
		onSubmit() {
			console.log('검색~');
		},
	},
};
</script>
