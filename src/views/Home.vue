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
			`];

			this.activities = [
				new GridListObject('Конкурс', this.dummyText[0], 'Подробнее', '/'),
				new GridListObject('Олимпиада', null, null, null),
				new GridListObject('Конкурс по робототехнике', null, null, null),
				new GridListObject('Мастер-классы', this.dummyText[1], 'Подробнее', '/'),
				new GridListObject('День карьеры', this.dummyText[2], 'Подробнее', '/'),
			];

			this.information = [
				new GridListObject('Конкурс', this.dummyText[0], 'Подробнее', '/'),
				new GridListObject('Конкурс по робототехнике', null, null, null),
				new GridListObject('Мастер-классы', this.dummyText[1], 'Подробнее', '/'),
				new GridListObject('День карьеры', this.dummyText[2], 'Подробнее', '/'),
			];

			this.partners = [
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
				new Partner('Parntner Name', '/', 'https://via.placeholder.com/300x150'),
			];
		}
	}
</script>

<style lang="scss">
	.main-block__content section {
		// margin-top: 10px;
	}
</style>
