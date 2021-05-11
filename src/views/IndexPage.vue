<template>
	<div class="main">
		<div class="main__visual">
			<main-slider></main-slider>
		</div>
		<div class="main__popular">
			<main-popular></main-popular>
		</div>
	</div>
</template>

<script>
import MainSlider from '@/components/index/MainSlider';
import MainPopular from '@/components/index/MainPopular';
export default {
	name: 'IndexPage',
	components: { MainPopular, MainSlider },
};
</script>

<style scoped></style>
