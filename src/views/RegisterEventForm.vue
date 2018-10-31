<template>
	<div class="register-form-page">
		<h1>{{this.eventInfo.title}}</h1>
		<p v-html="this.eventInfo.description"></p>
		<form>
			<div class="form-block team" id="team">
				<h3>Сведения о команде</h3>
				<div class="form-group">
					<label for="team__title">Название команды</label>
					<input class="form-control" id="team__title" name="title" type="text">
				</div>

				<div class="form-group" v-if="eventInfo.isOnlineAvaliable">
					<label for="team__is-online">Участие</label>
					<select class="form-control" name="is_online" id="team__is-online">
						<option value="false">Дистанционное участие</option>
						<option value="true" selected>Очное участие</option>
					</select>
				</div>

				<div class="form-group" v-if="!!eventInfo.questionList">
					<div class="team__questionsList" v-html="eventInfo.questionList"></div>
					<textarea class="form-control">123</textarea>
				</div>

				<div class="form-group">
					<label for="team__how-learned-about">Расскажите, как вы узнали о фестивале</label>
					<textarea class="form-control" id="team__how-learned-about"></textarea>
				</div>

				<div class="form-check" v-if="eventInfo.hasCoach">
					<input type="checkbox" v-model="hasCoach" class="form-check-input" id="team__has-coach">
					<label for="team__has-coach" class="form-check-label">У команды есть тренер</label>
				</div>
			</div>

			<div class="form-block coach" v-if="hasCoach" id="coach">
				<h3>Сведения о тренере</h3>
				<div class="form-group">
					<label for="coach__first-name">Имя</label>
					<input class="form-control" id="coach__first-name" type="text">
				</div>
				<div class="form-group">
					<label for="coach__last-name">Фамилия</label>
					<input class="form-control" id="coach__last-name" type="text">
				</div>
				<div class="form-group">
					<label for="coach__patronymic">Отчество</label>
					<input class="form-control" id="coach__patronymic" type="text">
				</div>
				<div class="form-group">
					<label for="coach__workplace">Место работы</label>
					<input class="form-control" id="coach__workplace" type="text">
				</div>
				<div class="form-group">
					<label for="coach__position">Должность</label>
					<input class="form-control" id="coach__position" type="text">
				</div>
				<div class="form-group">
					<label for="coach__address">Адрес</label>
					<input class="form-control" id="coach__address" type="text">
				</div>
				<div class="form-group">
					<label for="coach__soc-media">Профиль в социальной сети</label>
					<input class="form-control" id="coach__soc-media" type="text">
				</div>
				<div class="form-group">
					<label for="coach__birthdate">Дата рождения</label>
					<input class="form-control" id="coach__birthdate" type="text">
				</div>
				<div class="form-group">
					<label for="coach__email">E-mail</label>
					<input class="form-control" id="coach__email" type="text">
				</div>
				<div class="form-group">
					<label for="coach__phone">Номер телефона</label>
					<input class="form-control" id="coach__phone" type="text">
				</div>
			</div>

			<div class="form-block participants" id="participants">
				<h3>Сведения об участниках</h3>
				<div>
					<label for="participants__amount">Количество участников</label>
					<input id="participants__amount" v-model="teamMembersCount" min="1" max="3" type="number">
				</div>
				<div v-for="n in parseInt(teamMembersCount)" class="participants__block">
					<h5>Участник {{n}}</h5>
					<div class="form-group">
						<label for="participants__first-name">Имя</label>
						<input class="form-control" id="participants__first-name" type="text">
					</div>
					<div class="form-group">
						<label for="participants__last-name">Фамилия</label>
						<input class="form-control" id="participants__last-name" type="text">
					</div>
					<div class="form-group">
						<label for="participants__patronymic">Отчество</label>
						<input class="form-control" id="participants__patronymic" type="text">
					</div>
					<div class="form-group">
						<label for="participants__university">Университет</label>
						<input class="form-control" id="participants__university" type="text">
					</div>
					<div class="form-group">
						<label for="participants__speciality">Специальность</label>
						<input class="form-control" id="participants__speciality" type="text">
					</div>
					<div class="form-group">
						<label for="participants__year-of-study">Год обучения</label>
						<input class="form-control" id="participants__year-of-study" type="text">
					</div>
					<div class="form-group">
						<label for="participants__group">Группа</label>
						<input class="form-control" id="participants__group" type="text">
					</div>
					<div class="form-group">
						<label for="participants__address">Адрес</label>
						<input class="form-control" id="participants__address" type="text">
					</div>
					<div class="form-group">
						<label for="participants__birthdate">Дата рождения</label>
						<input class="form-control" id="participants__birthdate" type="text">
					</div>
					<div class="form-group">
						<label for="participants__email">E-mail</label>
						<input class="form-control" id="participants__email" type="text">
					</div>
					<div class="form-group">
						<label for="participants__phone">Номер телефона</label>
						<input class="form-control" id="participants__phone" type="text">
					</div>
					<div class="form-group">
						<label for="participants__soc-media">Профиль в социальной сети</label>
						<input class="form-control" id="participants__soc-media" type="text">
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

Component.registerHooks([
	'beforeRouteUpdate',
]);

@Component
export default class RegisterEventForm extends Vue {

	public eventInfo = '';
	public hasCoach = false;
	public teamMembersCount = 1;
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

<style lang="scss">
	@import "@/assets/scss/_vars.scss";

	.form-block {
		padding: $gutter * 2 $gutter;
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
				border-top: 2px dotted $c-dark;
			}
		}
	}
</style>