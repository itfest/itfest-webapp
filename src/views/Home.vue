<template>
	<div class="home">
		<Annotation :text="getInfo.annotation"/>
		<GridListBlock :activityItems="getAnnotationElements" />
		<GridListBlock v-if="getInformationElements.length > 0" :informationItems="getInformationElements" />
		<h3 class="heading heading--centered" v-if="getPartners.length > 0">Партнеры фестиваля</h3>
		<GridListBlock v-if="getPartners.length > 0" :partners="getPartners" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Annotation from '@/components/Annotation.vue';
	import BigLink from '@/components/BigLink.vue';
	import GridListBlock from '@/components/GridListBlock.vue';
	import GridListObject from '@/classes/GridListObject.ts';
	import Partner from '@/classes/Partner.ts';

	@Component({
		components: {
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
			return this.$store.getters.getInformationElements;
		}

		get getPartners() {
			return this.$store.getters.getPartners;
		}

		get getInfo() {
			return this.$store.getters.getInfo;
		}
	}
</script>

<style lang="scss">
	.main-block__content section {
		margin-top: 10px;
	}
</style>
