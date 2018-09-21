<template>
	<div class="information__item">
		<h2>{{ informationItem.heading }}</h2>
		<p> {{ informationItem.text }}</p>
		<a :href=informationItem.linkUri>
			{{ informationItem.linkText }}
		</a>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import GridListObject from '@/classes/GridListObject.ts';

	@Component
	export default class GridInformationElement extends Vue {
		@Prop() private informationItem!: GridListObject;
	}

</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	
</style>