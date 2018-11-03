<template>
	<section class="register-event-block">
		<h3>{{event.title}}</h3>
		<div v-html="event.description"></div>
		<div class="reg-link mt-3 mb-3">			
			<router-link v-bind:to="`/register/event/${event.id}`">Перейти к регистрации</router-link>
		</div>
	</section>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import FestEvent from '@/classes/FestEvent.ts';

	@Component
	export default class RegisterEventBlock extends Vue {
		@Prop() private event!: FestEvent;
	}
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";	
</style>
