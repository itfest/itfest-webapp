<template>
	<div class="activities__item"
		:class="{'activities__item--no-text': (activityItem.text.length > 0 && activityItem.linkUri.length > 0)}"
	>
		<span>
			<h2 >{{ activityItem.heading }}</h2>
			<p v-if="activityItem.text.length > 0">{{ activityItem.text }}</p>
			<a v-if="activityItem.linkUri.length > 0" :href=activityItem.linkUri>
				{{ activityItem.linkText }}
			</a>
		</span>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import GridListObject from '@/classes/GridListObject.ts';

	@Component
	export default class GridActivityElement extends Vue {
		@Prop() private activityItem!: GridListObject;
	}
</script>
