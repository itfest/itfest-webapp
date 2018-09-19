<template>
	<section class="row activities">
		<ActivityElement />
		<ActivityElement />
		<ActivityElement />
		<ActivityElement />
		<ActivityElement />
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ActivityElement from './ActivityElement.vue';
	import ActivityObject from '@/classes/ActivityObject.ts';

	@Component({
		components: {
			ActivityElement,
		},
	})
	export default class ActivityBlock extends Vue {
		@Prop() private activityItems!: ActivityObject[];
	}

</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	
	.activities {
		padding: 15px;
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
</style>
