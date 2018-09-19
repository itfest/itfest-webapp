<template>
  <div class="home">
    <Annotation text="Minus officia fuga suscipit inventore, maxime porro consectetur ex et, adipisci quis, sequi similique quae quam soluta impedit."/>
    <ActivityBlock />
    <BigLink linkUri="/register" linkText="Перейти к регистрации" />
    <HelloWorld msg="Dummy text"/>
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
	export default class Home extends Vue {}
</script>

<style lang="scss">
	.main-block__content section {
		margin-top: 30px;
	}
</style>
