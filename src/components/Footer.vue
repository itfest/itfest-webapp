<template>
	<footer class="global-footer">
		<div class="global-footer__content">
			<div>
				&copy; ВШ&nbsp;ИТиАС<br />
				<a href="https://narfu.ru">
					Северный (Арктический) Федеральный Университет имени М.В. Ломоносова
				</a>
			</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maiores corporis doloremque maxime recusandae optio nulla eveniet rem perferendis. Deserunt consequuntur voluptas error ut nesciunt quibusdam illum optio aliquid vel!
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import GridListObject from '@/classes/GridListObject.ts';

	@Component
	export default class Footer extends Vue {
		@Prop() private informationItem!: GridListObject;
	}
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	.global-footer {
		padding: 20px 15px 20px;
		font-size: 1rem;
		overflow: hidden;

		&__content {
			display: grid;
			position: relative;
			width: 100%;
			padding: 20px 10px;
			grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
			grid-auto-rows: minmax(120px, auto);
			grid-gap: $gutter;
			color: $c-white-transparent-6;
			border: 4px solid $c-white-transparent-2;

			&:after {
				content: "";
				position: absolute;
				top: 100%;
				left: 50%;
				width: 4px;
				height: 20px;
				margin: 4px 0 0 -2px;
				background-color: $c-white-transparent-2;
			}
		}
	}
</style>