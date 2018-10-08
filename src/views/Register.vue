<template>
	<div class="about">
		<h1>Регистрация</h1>
		<p v-if="!getInfo.isRegistraionActive">
			Регистрация временно недоступна.
		</p>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class Annotation extends Vue {
		get getInfo() {
			return this.$store.getters.getInfo;
		}
	}
</script>