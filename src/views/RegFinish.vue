<template>
	<div class="page">
		<h2>Регистрация успешна</h2>
		<p>Ваша работа отправлена на проверку.</p>
		<router-link to="/register">Назад к странице регистрации</router-link>
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
export default class RegFinish extends Vue {
	constructor() {
		super();
	}
}
</script>