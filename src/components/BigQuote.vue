<template>
	<section class="big-quote">
		<span class="big-quote__l-q"></span>
		<span class="big-quote__r-q"></span>
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

	$big-quote-border: 4px solid $c-dark;

	.big-quote {
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
			border-top: $big-quote-border;
			border-bottom: $big-quote-border;

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
			border-left: $big-quote-border;
			left: 0;

			&:before {
				right: 100%;
			}
		}

		&__r-q {
			border-right: $big-quote-border;
			right: 0;

			&:before {
				left: 100%;
			}
		}
	}
</style>
