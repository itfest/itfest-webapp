<template>
	<div id="app" class="container-fluid">
		<div class="row">
			<aside class="sidebar col-lg-4" :class="{'sidebar--scrolled': scrollingPosition > 292}">
				<div class="sidebar__container">
					<Header msg="15-17 ДЕКАБРЯ 2018г."/>
					<div class="menu-container col-12">
						<nav id="nav" class="menu">
							<router-link to="/">Главная</router-link>
							<router-link to="/register">Регистрация</router-link>
							<router-link to="/about">Положения</router-link>
							<router-link to="/about">Контакты</router-link>
						</nav>
					</div>
				</div>
			</aside>

			<main class="main-block offset-lg-4 col-lg-8 ">
				<Header class="row main-block__header" msg="15-17 ДЕКАБРЯ 2018г."/>
				<router-view class="main-block__content"
				:style="`min-height: calc(100vh - ${getDimentions.header}px - ${getDimentions.footer}px)`"/>
				<Footer class="row main-block__footer" />
			</main>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	import axios from 'axios';

	@Component({
		components: {
			Header,
			Footer,
		},
	})
	export default class App extends Vue {
		public scrollingPosition: number;
		public someVarible: any;

		constructor() {
			super();
			this.scrollingPosition = 0;
			this.someVarible = null;
		}

		public handleScroll() {
			this.scrollingPosition = window.pageYOffset || document.documentElement.scrollTop;
		}

		public mounted() {
			window.addEventListener('scroll', this.handleScroll);
		}

		get getDimentions() {
			return this.$store.getters.getDimentions;
		}

	}
</script>

<style lang="scss">
	@import "assets/scss/main";
	
	.sidebar {
		position: relative;
		background-size: cover;
		background-attachment: fixed;
		background-position: 50%;
		color: $c-light;
		background-color: $c-dark;
		height: 100vh;
		position: fixed;
		background-image: $i-main-bg;
		
				
		.header {
			opacity: 0;
			font-size: 0.85rem;
			width: 100%;
			background-image: none;

			&:before {
				content: "";
				background-color: initial;
			}

			&__content {
				max-width: initial;
			}

			&__frame {
				padding: 10px 50px 30px;

				&:before {
					content: "";
					position: absolute;
					left: 50%;
					bottom: 100%;
					margin: 0 0 4px -2px;
					width: 4px;
					height: 500px;
					background-color: $c-white;
					opacity: .4;
				}

				&:after {
					content: initial;
				}

				h1, h2 {
					padding: 0;

					&:after {
						content: initial;
					}
				}
			}
		}

		&__container {
			margin: 0 -15px;
			text-align: center;
			height: 100%; 
			background-color: $c-dark;
			transition: background-color .3s ease;     
		}

		&--scrolled {
			.sidebar__container { 
				background-color: $c-dark-rgba-faded;
			}

			.header {
				opacity: 1;				
			}
		}
	}


	.menu {
		font-family: $f-os;
		font-size: 1.3rem;
		padding: 40px 5px;
		text-align: right;

		a {
			display: block;
			color: $c-white;
			padding: 10px;
		}
	}

	.main-block {
		overflow-x: hidden;

		&__content {
			max-width: $max-width;
			padding: $gutter * 2 $gutter 40px;
		}

		&__footer {
			padding: $gutter * 2;
			background-color: $c-dark-bg;			
			> div {
				max-width: $max-width - $gutter * 2;
			}
		}
	}
</style>
