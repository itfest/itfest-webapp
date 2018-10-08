<template>
	<div class="home">
		<Annotation :text="getInfo.annotation"/>
		<GridListBlock :activityItems="getAnnotationElements" />
		<BigLink v-if="getInfo.isRegistraionActive" linkUri="/register" linkText="Перейти к регистрации" />
		<GridListBlock v-if="getInformationElements.length > 0" :informationItems="getInformationElements" />
		<h3 class="heading heading--centered" v-if="getPartners.length > 0">Партнеры фестиваля</h3>
		<GridListBlock v-if="getPartners.length > 0" :partners="getPartners" />
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
			this.$store.dispatch('getInfoFromApi');
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
