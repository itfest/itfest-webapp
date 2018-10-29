<template>
	<section class="annotation">
		<span class="annotation__l-q"></span>
		<span class="annotation__r-q"></span>
		<p>{{ text }}</p>
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class Annotation extends Vue {
		@Prop() private text!: string;
	}
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	$annotation-border: 4px solid $c-dark;

	.annotation {
		position: relative;
		padding: 30px 40px 15px;
		font-size: 24px;
		font-style: italic;
		line-height: 1.5;

		&__l-q, &__r-q {
			position: absolute;
			display: block;
			top: 0;
			bottom: 0;
			width: 10px;
			border-top: $annotation-border;
			border-bottom: $annotation-border;

			&:before {
				content: '';
				position: absolute;
				top: 50%;
				margin-top: -2px;
				height: 4px;
				width: 50vw;
				background-color: $c-dark;
			}
		}

		&__l-q {
			border-left: $annotation-border;
			left: 0;

			&:before {
				right: 100%;
			}
		}

		&__r-q {
			border-right: $annotation-border;
			right: 0;

			&:before {
				left: 100%;
			}
		}

		@media (max-width: 539px) {
			padding: 20px 20px 5px;
			font-size: 16px;
		}
	}
</style>
