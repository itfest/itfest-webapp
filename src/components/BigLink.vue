<template>
	<section class="big-link-block col-12">
		<router-link v-bind:to="linkUri">{{ linkText }}</router-link>
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class BigLink extends Vue {
		@Prop() private linkUri!: string;
		@Prop() private linkText!: string;
	}
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	.big-link-block {
		display: block;
		position: relative;
		padding: 40px;
		text-align: center;
		background-image: url(/img/big-link-bg.jpg);
		background-size: cover;
		background-position: center;
		border: 4px solid $c-white-transparent-4;

		a {
			display: inline-block;
			padding: 10px 15px;
			text-decoration: none;
			color: $c-white;
			border: 4px solid $c-white-transparent-4;
			
			&:hover {
				background-color: $c-white-transparent-2;
				border-color: $c-white-transparent-6;
			}
		}
	}
	
</style>
