<template>
	<div class="register">
		<h1>Регистрация</h1>
		<p v-if="!getInfo.isRegistraionActive">
			Регистрация временно недоступна.
		</p>
		<div v-if="getInfo.isRegistraionActive">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae repudiandae vero nesciunt excepturi laudantium unde fuga eum alias magni?</p>

			<h3>Командная олимпиада</h3>
			<p>Velit consequatur quo tempore, necessitatibus ullam minima eius rerum dolore.</p>
			<div class="reg-link">				
				<a href="#">Перейти к регистрации команды</a>
			</div>

			<h3>Мини-курсы и мастер-классы</h3>
			<p>Velit consequatur quo tempore, necessitatibus ullam minima eius rerum dolore.</p>
			<div class="reg-link">				
				<a href="#">Перейти к регистрации участников мини-курсов и мастер-классов</a>
			</div>

			<h3>Конкурс компьютерных работ</h3>
			<p>Velit consequatur quo tempore, necessitatibus ullam minima eius rerum dolore.</p>
			<div class="reg-link">				
				<a href="#">Перейти к регистрации конкурсной работы</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class Register extends Vue {
		get getInfo() {
			return this.$store.getters.getInfo;
		}
	}
</script>

<style lang="scss" scoped>
	.reg-link {
		text-align: right;
	}

	h3 {
		margin-top: 30px;
	}

</style>