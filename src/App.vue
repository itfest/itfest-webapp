<template>
	<div id="app" class="container-fluid">
		<div class="row">
			<aside class="sidebar row-xs col-md-4" :class="{'sidebar--scrolled': scrollingPosition > 292}">
				<button class="sidebar__burger" @click="menuToggle"><img src="/img/burger.svg"></button>
				<div class="sidebar__container" :class="{'menu-shown': this.menuShown}">
					<Header :msg="getInfo.dates"/>
					<div class="menu-container col-12">
						<nav id="nav" class="menu">
							<router-link v-on:click.native="menuClose()" to="/">Главная</router-link>
							<router-link v-on:click.native="menuClose()" v-show="getInfo.isRegistraionActive" to="/register">Регистрация</router-link>
							<router-link v-for="page in getPageListFromApi" :key="page.id" v-on:click.native="menuClose()" :to="`/page/${page.id}`">{{page.title}}</router-link>
						</nav>
					</div>
				</div>
			</aside>

			<main class="main-block row-xs col-12 offset-md-4 col-md-8">
				<Header class="row main-block__header" :msg="getInfo.dates"/>
				<router-view class="main-block__content"
				:style="`min-height: calc(100vh - ${getDimentions.header}px - ${getDimentions.footer}px)`"/>
				<Footer class="row main-block__footer" :text="getInfo.footer" />
			</main>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';

	@Component({
		components: {
			Header,
			Footer,
		},
	})
	export default class App extends Vue {
		public scrollingPosition: number;
		public menuShown = false;

		constructor() {
			super();
			this.scrollingPosition = 0;
		}

		public handleScroll() {
			this.scrollingPosition = window.pageYOffset || document.documentElement.scrollTop;
		}

		public menuToggle() {
			this.menuShown = !this.menuShown;
		}

		public menuClose() {
			this.menuShown = false;
		}

		public mounted() {
			window.addEventListener('scroll', this.handleScroll);
			this.$store.dispatch('getInfoFromApi');
			this.$store.dispatch('getEventListFromApi');
			this.$store.dispatch('getContestNominationsFromApi');
			this.$store.dispatch('getPageListFromApi');
		}

		get getDimentions() {
			return this.$store.getters.getDimentions;
		}

		get getInfo() {
			return this.$store.getters.getInfo;
		}

		get getPageListFromApi() {
			return this.$store.getters.getPageList;
		}
	}
</script>

<style lang="scss">
	@import "assets/scss/main";
	
	.sidebar {
		position: fixed;
		height: 100vh;
		text-align: right;
		color: $c-light;
		background-color: $c-dark;
		background-size: cover;
		background-attachment: fixed;
		background-position: 50%;
		background-image: $i-main-bg;
		z-index: 3;
				
		.header {
			font-size: 0.85rem;
			width: 100%;
			background-image: none;
			opacity: 0;
			

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

				@media (max-width: $screen-lg - 1px) {
					padding: 0 30px 20px;
					font-size: 0.85em;
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

		@media (min-width: $screen-md) {
			&__burger {
				display: none;
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

		@media (max-width: $screen-md - 1px) {
			height: 50px;
			background-color: $c-dark;
			background-image: none;

			&__burger {
				display: inline-block;
				position: relative;
				padding: 8px 0;
				font-size: 1.8rem;
				color: $c-white;
				background-color: transparent;
				border: none;
				outline: none;
				max-height:100%;

				img {
					max-height: 25px;
				}

				&:hover, &active, &focus {
					outline: none;
				}
			}

			&__container {
				position: fixed;
				height: 100vh;
				width: 100%;
				&:not(.menu-shown) {
					display: none;
				}
			}

			.header {
				display: none;
			}

			.menu-container {
				padding-top: 30px;
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

			li {
				padding: 3px 0;
			}
		}

		&__footer {
			padding: $gutter * 2;
			background-color: $c-dark-bg;			
			> div {
				max-width: $max-width - $gutter * 2;
			}
		}

		@media (max-width: $screen-md - 1px) {
			&__header {
				padding-top: 40px;
			}
		}
	}

</style>
