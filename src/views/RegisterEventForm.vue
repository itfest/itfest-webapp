<template>
	<div class="register-form-page">
		<h1>{{this.eventInfo.title}}</h1>
		<div v-html="this.eventInfo.description"></div>
		<form>
			
		</form>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { apiHost } from '@/config';

Component.registerHooks([
	'beforeRouteUpdate',
]);

@Component
export default class RegisterEventForm extends Vue {

	public eventInfo = '';
	public formData = {

	};

	constructor() {
		super();
	}

	public beforeRouteUpdate(to: any, from: any, next: () => {}) {
		this.fillInWithContent(to.params.id);
		next();
	}

	public mounted() {
		this.fillInWithContent(this.$route.params.id);
		this.eventInfo = this.getCurrentEventInfo();
	}

	public getCurrentEventInfo() {
		return this.$store.getters.getEvents.find((obj: any) => {
			return obj.id === parseInt(this.$route.params.id, 10);
		});
	}

	get getEvents() {
		return this.$store.getters.getEvents;
	}

	private fillInWithContent(id: string) {
		// 234
	}
}
</script>