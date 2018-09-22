<template>
  <div class="home">
    <Annotation text="Minus officia fuga suscipit inventore, maxime porro consectetur ex et, adipisci quis, sequi similique quae quam soluta impedit."/>
    <GridListBlock :activityItems="activities" />
    <BigLink linkUri="/register" linkText="Перейти к регистрации" />
    <GridListBlock :informationItems="information" />
    <GridListBlock :partners="partners" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue';
	import Annotation from '@/components/Annotation.vue';
	import BigLink from '@/components/BigLink.vue';
	import GridListBlock from '@/components/GridListBlock.vue';
	import GridListObject from '@/classes/GridListObject.ts';
	import Partner from '@/classes/Partner.ts';

	@Component({
		components: {
			HelloWorld,
			Annotation,
			BigLink,
			GridListBlock,
		},
	})
	export default class Home extends Vue {
		public activities: GridListObject[];
		public information: GridListObject[];
		public partners: Partner[];
		private dummyText: string[];

		constructor() {
			super();
			this.dummyText = [
			`
			Assumenda sunt, labore officiis rem iste, tenetur magni minus
			consectetur suscipit, nam, eum adipisci veniam laudantium
			recusandae culpa repellat repellendus reprehenderit pariatur!
			`,
			`
			Assumenda sunt, labore officiis rem iste, tenetur magni minus
			consectetur suscipit!
			`,
			`
			Quidem quisquam animi, perspiciatis sunt provident voluptas sit,
			earum velit eos unde natus odit vitae dolorum.
			`,
			`Международный молодежный фестиваль информационных технологий
			«IT-Архангельск» – уникальный проект, который проводится с
			целью консолидации интеллектуальной и творческой молодежи,
			интересующейся современными информационными технологиями.
			Его организация осуществляется согласно положению о проведении.
			`,
			`
			Distinctio corporis suscipit non a asperiores, consequatur unde,
			placeat quisquam blanditiis mollitia inventore? Eveniet ducimus
			dicta, dolorum, aliquid aperiam ab vel exercitationem ipsa ipsam
			consequuntur delectus voluptatum ut error impedit. Possimus dicta
			voluptatem quaerat delectus vitae totam maiores officia
			perferendis officiis aspernatur, vel deleniti id esse doloribus
			incidunt minus voluptates laudantium.`,
			`Nihil quisquam atque vero autem in! Voluptatibus atque, enim
			exercitationem totam natus possimus. Officiis nemo deserunt saepe
			dolorem id eum, quasi molestiae velit, atque. Libero impedit
			ratione ducimus earum praesentium exercitationem doloribus omnis,
			nesciunt recusandae obcaecati.`,
			`
			In, omnis, labore? Accusantium aliquam incidunt vitae similique
			repudiandae pariatur necessitatibus sint explicabo alias nemo
			delectus placeat tempora debitis cumque, esse labore optio a
			laboriosam eius blanditiis eaque quae. Obcaecati? Incidunt
			recusandae, neque vero numquam ducimus maiores aspernatur ad ab
			architecto adipisci cupiditate excepturi, quos nostrum deserunt
			quae quisquam culpa corporis tenetur quibusdam amet dolorum
			totam dolor. Quisquam enim, impedit!
			`,
			];

			this.activities = [
				new GridListObject('Конкурс', this.dummyText[0], 'Подробнее', '/'),
				new GridListObject('Олимпиада', null, null, null),
				new GridListObject('Конкурс по робототехнике', null, null, null),
				new GridListObject('Мастер-классы', this.dummyText[1], 'Подробнее', '/'),
				new GridListObject('День карьеры', this.dummyText[2], 'Подробнее', '/'),
			];

			this.information = [
				new GridListObject('Положение', this.dummyText[3], 'Подробнее', '/'),
				new GridListObject('Ipsumo Dolorem', this.dummyText[4], null, null),
				new GridListObject('Nihil, incidunt', this.dummyText[5], 'Подробнее', '/'),
				new GridListObject('Saepe, omnis', this.dummyText[6], 'Подробнее', '/'),
			];

			this.partners = [
				new Partner('Parntner Name 1', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 2', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 3', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 4', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 5', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 6', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 7', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name 8', '/', 'https://via.placeholder.com/300x150'),
			];
		}
	}
</script>

<style lang="scss">
	.main-block__content section {
		// margin-top: 10px;
	}
</style>
