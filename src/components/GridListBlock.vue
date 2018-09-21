<template>
	<section class="row row--with-paddings"
	:class="{activities: !!activityItems, information: !!informationItems}">
		<GridActivityElement
		v-if="!!activityItems"
		v-for="item in activityItems"
		:key="item.heading"
		:activityItem="item" />

		<GridInformationElement
		v-if="!!informationItems"
		v-for="item in informationItems"
		:key="item.heading"
		:informationItem="item" />		
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import GridActivityElement from './GridActivityElement.vue';
	import GridInformationElement from './GridInformationElement.vue';
	import GridListObject from '@/classes/GridListObject.ts';

	@Component({
		components: {
			GridActivityElement,
			GridInformationElement,
		},
	})
	export default class GridListBlock extends Vue {
		@Prop() private activityItems?: GridListObject[];
		@Prop() private informationItems?: GridListObject[];
	}

</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	.row--with-paddings {
		padding: 15px;
	}
	
	.activities {
		display: grid;
		position: relative;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		grid-auto-rows: minmax(240px, auto);
		grid-gap: 15px;

		&__item {
			display: grid;
			position: relative;
			align-content: center;
			padding: 25px 12px;
			color: $c-white;
			font-size: 1.2rem;
			background-image: url(/img/activities-bg.jpg);
			background-position: 50%;
			background-size: cover;
			background-attachment: fixed;

			a {
				color: $c-white;
				font-style: italic;
			}

			p {
				padding-top: 15px;
			}

			span {
				display: block;
				position: relative;
				z-index: 2;
			}

			&:not(&--no-text) h2 {
				position: relative;
				padding-bottom: 15px;
				margin: 0;
				&:after {
					content: "";
					display: block;
					position: absolute;
					top: 100%;
					left: -8px;
					width: 50px;
					height: 4px;
					background: $c-light;
					opacity: .4;
				}
			}

			&--no-text {
				text-align: center;
			}

			&:before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-color: $c-dark;
				opacity: .65;
				z-index: 0;
			}

			&:after {
				content: "";
				position: absolute;
				top: 0px;
				right: 0px;
				left: 0px;
				bottom: 0px;
				border: 4px solid rgba(255,255,255,.4);
				z-index: 1;
			}

			&:nth-child(1) {
				grid-row: 1 / 3;
			}

			&:last-child {
				grid-column-end: span -1;
			}
		}
	}

	.information {
		display: grid;
		position: relative;
		grid-auto-rows: minmax(80px, auto);
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;

		&__item {
			display: grid;
			justify-content: space-between;
			grid-template-rows: auto 1fr auto;

			> h3 {
				align-self: start;
			}

			> a {
				align-self: end;
				justify-self: start;
			}
		}
	}

</style>