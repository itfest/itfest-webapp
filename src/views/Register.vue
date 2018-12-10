<template>
	<div class="register">
		<h1>Регистрация завершена</h1>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import RegisterEventBlock from '@/components/RegisterEventBlock.vue';

	@Component({
		components: {
			RegisterEventBlock,
		},
	})
	export default class Register extends Vue {
		get getEvents() {
			return this.$store.getters.getEvents;
		}

		get getInfo() {
			return this.$store.getters.getInfo;
		}
	}
</script>

<style lang="scss" scoped>
	h3 {
		margin-top: 30px;
	}
</style>