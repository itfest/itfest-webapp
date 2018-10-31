<template>
	<div class="register-form-page">
		<h1>{{this.eventInfo.title}}</h1>
		<p v-html="this.eventInfo.description"></p>
		<form>
			<div class="form-block contest-work" id="contest-work">
				<h3>Сведения о конкурсной работе</h3>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__title">Название работы</label>
					<input class="col-md-6 col-lg-8 form-control" id="contest-work__title" name="title" type="text">
				</div>

				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__how-learned-about">Расскажите, как вы узнали о фестивале</label>
					<textarea class="col-md-6 col-lg-8 form-control" id="contest-work__how-learned-about"></textarea>
				</div>

				<div class="form-check">
					<input class=" form-check-input" type="checkbox" v-model="hasMentor" id="contest-work__has-mentor">
					<label class="form-check-label" for="contest-work__has-mentor">Указать руководителя(препдавателя)</label>
				</div>
			</div>

			<div class="form-block mentor" v-if="hasMentor" id="mentor">
				<h3>Сведения о руководителе работы</h3>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="mentor__first-name">ФИО руководителя</label>
					<input class="col-md-6 col-lg-8 form-control" id="mentor__first-name" type="text">
				</div>
			</div>

			<div class="form-block participants">
				<h3 v-if="teamMembersCount > 1">Сведения об авторах работы</h3>
				<h3 v-if="!(teamMembersCount > 1)">Сведения об авторе работы</h3>
				<h3>Сведения об авторах работы</h3>
				<div class="form-row my-3 row-lg">
					<label class="col-form-label col-md-6 col-lg-4" for="participants__amount">Количество авторов</label>
					<input class="col-form-label col-md-6 col-lg-8 form-control" id="participants__amount" v-model="teamMembersCount" min="1" :max="eventInfo.teamLimit" type="number">
				</div>
				<div v-for="n in parseInt(teamMembersCount)" class="participants__block pt-3">
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__first-name">Имя</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__first-name" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__last-name">Фамилия</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__last-name" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__patronymic">Отчество</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__patronymic" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__university">Университет (Школа)</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__university" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__speciality">Специальность</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__speciality" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__year-of-study">Год обучения</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__year-of-study" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__group">Группа</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__group" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__address">Адрес</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__address" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__birthdate">Дата рождения</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__birthdate" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__email">E-mail</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__email" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__phone">Номер телефона</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__phone" type="text">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__soc-media">Профиль в социальной сети</label>
						<input class="col-md-6 col-lg-8 form-control" id="participants__soc-media" type="text">
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { apiHost } from '@/config';

@Component
export default class RegisterContestForm extends Vue {

	public eventInfo = '';
	public hasCoach = false;
	public contest-workMembersCount = 1;
	public formData = {

	};

	constructor() {
		super();
	}

	public mounted() {
	}
}
</script>

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	.form-block {
		padding: $gutter * 2;
		background-color: $c-light;

		& + & {
			position: relative;
			margin-top: 20px;

			&:before {
				content: "";
				display: block;
				position: absolute;
				left: 50%;
				bottom: 100%;
				margin-left: -4px;
				width: 8px;
				height: 20px;
				background-color: $c-light;
			}
		}
	}

	.participants {
		&__block {
			padding: 10px 0;

			& + & {
				border-top: 2px dotted $c-dark-rgba-faded;
			}
		}
	}
</style>