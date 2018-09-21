<template>
	<div class="activities__item"
	:class="{'activities__item--no-text': isWithoutText()}"
	>
		<span>
			<h2 >{{ activityItem.heading }}</h2>
			<p v-if=!isWithoutText()>{{ activityItem.text }}</p>
			<a v-if=!isWithoutText() :href=activityItem.linkUri>{{ activityItem.linkText }}</a>
		</span>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ActivityObject from '@/classes/ActivityObject.ts';

	@Component
	export default class ActivityElement extends Vue {
		@Prop() private activityItem!: ActivityObject;

		public isWithoutText() {
			return this.activityItem.text == null &&
			(this.activityItem.linkText == null || this.activityItem.linkUri == null);
		}
	}

</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	
</style>