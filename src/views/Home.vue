<template>
  <div class="home">
    <BigQuote text="Minus officia fuga suscipit inventore, maxime porro consectetur ex et, adipisci quis, sequi similique quae quam soluta impedit."/>
    <BigLink linkUri="/register" linkText="Перейти к регистрации" />
    <HelloWorld msg="Dummy text"/>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue';
	import BigQuote from '@/components/BigQuote.vue';
	import BigLink from '@/components/BigLink.vue';
	import {AnnotationBlock, AnnotationObject} from '@/components/Annotation/AnnotationBlock.vue';

	@Component({
		components: {
			HelloWorld,
			BigQuote,
			BigLink,
		},
	})
	export default class Home extends Vue {}
</script>

<style lang="scss">
	.main-block__content section {
		margin-bottom: 20px;
	}
</style>
