<template>
	<a
		title="123"
		:style="`background-image: url(${partner.imgUrl});`"
		href="#"
		rel="noopener noreferrer nofollow" target="_blank"
	></a>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import Partner from '@/classes/Partner.ts';

	@Component
	export default class PartnersElement extends Vue {
		@Prop() private partner!: Partner;
	}
</script>
