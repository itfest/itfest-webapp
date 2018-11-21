<template>
	<div class="register">
		<h1>Регистрация</h1>
		<p v-if="!getInfo.isRegistraionActive">
			Регистрация временно недоступна.
		</p>
		<div v-if="getInfo.isRegistraionActive ">
			<h3>Конкурс компьютерных работ</h3>
			
			До участия допускаются учащиеся российских и зарубежных учреждений среднего общего образования, начального и среднего профессионального образования, высших учебных заведений в возрасте от 14 до 25 лет. Конкурс проводится по определенному списку номинаций. Принять участие могут как индивидуальные участники, так и авторские коллективы размером до трех человек.

			<div class="reg-link mt-3 mb-5">
				<router-link to="register/contest-work">Перейти к регистрации конкурсной работы</router-link>
			</div>
			
			<RegisterEventBlock v-for="event in getEvents" :key="event.id" :event="event" v-if="event.register_available"/>
		</div>
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