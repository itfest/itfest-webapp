<template>
  <div class="home">
    <Annotation text="Minus officia fuga suscipit inventore, maxime porro consectetur ex et, adipisci quis, sequi similique quae quam soluta impedit."/>
    <ActivityBlock :activityItems="activities" />
    <BigLink linkUri="/register" linkText="Перейти к регистрации" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue';
	import Annotation from '@/components/Annotation.vue';
	import BigLink from '@/components/BigLink.vue';
	import ActivityBlock from '@/components/ActivityBlock.vue';
	import ActivityObject from '@/classes/ActivityObject.ts';

	@Component({
		components: {
			HelloWorld,
			Annotation,
			BigLink,
			ActivityBlock,
		},
	})
	export default class Home extends Vue {
		public activities: ActivityObject[];
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
				new ActivityObject('Конкурс', this.dummyText[0], 'Подробнее', '/'),
				new ActivityObject('Олимпиада', null, null, null),
				new ActivityObject('Конкурс по робототехнике', null, null, null),
				new ActivityObject('Мастер-классы', this.dummyText[1], 'Подробнее', '/'),
				new ActivityObject('День карьеры', this.dummyText[2], 'Подробнее', '/'),
			];
		}
	}
</script>

<style lang="scss">
	.main-block__content section {
		// margin-top: 10px;
	}
</style>
