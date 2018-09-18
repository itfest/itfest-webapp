<template>
	<section class="big-link-block col-12">
		<router-link v-bind:to="linkUri">{{ linkText }}</router-link>
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import AnnotationObject from './AnnotationObject';

	@Component
	class AnnotationElement extends Vue {
		@Prop() private annotationElements!: string;
	}


	export { AnnotationElement, AnnotationObject };
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	
</style>
