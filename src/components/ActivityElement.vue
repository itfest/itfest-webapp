<template>
	<div class="activities__item">
		<span>
			<h2>Конкурс</h2>
				<p>Assumenda sunt, labore officiis rem iste, tenetur magni minus consectetur suscipit, nam, eum adipisci veniam laudantium recusandae culpa repellat repellendus reprehenderit pariatur!</p>
				<a href="#">Подробнее</a>
		</span>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import ActivityObject from '@/classes/ActivityObject.ts';

	@Component
	export default class ActivityElement extends Vue {
		@Prop() private activityItem!: ActivityObject;
	}

</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";
	
</style>
