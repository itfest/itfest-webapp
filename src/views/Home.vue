<template>
  <div class="home">
    <Annotation text="Minus officia fuga suscipit inventore, maxime porro consectetur ex et, adipisci quis, sequi similique quae quam soluta impedit."/>
    <GridListBlock :activityItems="getAnnotationElements" />
    <BigLink linkUri="/register" linkText="Перейти к регистрации" />
    <GridListBlock :informationItems="getInformationElements" />
    <h3 class="heading heading--centered" :if="getPartners.length">Партнеры фестиваля</h3>
    <GridListBlock :partners="getPartners" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue';
	import Annotation from '@/components/Annotation.vue';
	import BigLink from '@/components/BigLink.vue';
	import GridListBlock from '@/components/GridListBlock.vue';
	import GridListObject from '@/classes/GridListObject.ts';
	import Partner from '@/classes/Partner.ts';

	@Component({
		components: {
			HelloWorld,
			Annotation,
			BigLink,
			GridListBlock,
		},
	})
	export default class Home extends Vue {
		constructor() {
			super();
		}

		public mounted() {
			this.$store.dispatch('getAnnotationElementsFromApi');
			this.$store.dispatch('getInformationElementsFromApi');
			this.$store.dispatch('getPartnersFromApi');
		}

		get getAnnotationElements() {
			return this.$store.getters.getAnnotationElements;
		}

		get getInformationElements() {
			return this.$store.getters.getAnnotationElements;
		}

		get getPartners() {
			return this.$store.getters.getPartners;
		}
	}
</script>

<style lang="scss">
	.main-block__content section {
		margin-top: 10px;
	}
</style>
