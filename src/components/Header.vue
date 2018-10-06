<template>
	<header class="header">
		<div class="header__content">
			<div class="header__frame">
				<h1>IT-Архангельск</h1>
				<span>{{ msg }}</span>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
	@Prop() private msg!: string;

	public mounted() {
		if (this.$el.classList.contains('main-block__header')) {
			this.$store.commit('setDimention', {element: 'header', value: this.$el.offsetHeight });
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	.header {
		position: relative;
		transition: opacity 0.3s ease;
		text-align: center;
		color: $c-light;
		overflow: hidden;
		background-size: cover;
		background-position: center;
		background-image: $i-main-bg;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: $c-dark-rgba-faded;
		}

		&__content {
			width: 100%;
			display: block;
			padding: 60px $gutter;
			max-width: $max-width;
		}

		&__frame {
			display: inline-block;
			padding: 10px 60px 30px;
			border: 4px solid $c-white-transparent-4;
			position: relative;
			
			&:after {
				content: "";
				position: absolute;
				left: 50%;
				top: 100%;
				margin: 4px 0 0 -2px;
				width: 4px;
				height: 500px;
				background-color: $c-white;
				opacity: .4;
			}
		}

		h1, h2 {
			display: block;
			position: relative;
			margin: 18px 0;
			padding: 0 0 20px;
			
			&:after {
				content: "";
				position: absolute;
				display: inline-block;
				height: 4px;
				top: 100%;
				left: 20%;
				right: 20%;
				background-color: #e3e3e3;
				opacity: .8;
			}
		}
	}
</style>
