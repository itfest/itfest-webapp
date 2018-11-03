<template>
	<div class="register-form-page">
		<h1>{{getCurrentEventInfo().title}}</h1>
		<p v-html="getCurrentEventInfo().description"></p>
		<form class="reg-form" @submit="submitForm">
			<div class="form-block team" id="team">
				<h3 v-if="getCurrentEventInfo().teamLimit > 1" >Сведения о команде</h3>
				<h3 v-if="getCurrentEventInfo().teamLimit == 1">Общие сведения</h3>
				<div class="form-row my-1 row-sm" v-if="getCurrentEventInfo().teamLimit > 1">
					<label class="col-form-label col-md-6 col-lg-4" for="team__title">Название команды</label>
					<input class="col-md-6 col-lg-8 form-control" id="team__title" name="title" type="text" v-model="eventParticipationNote.title">
				</div>

				<div class="form-row my-1 row-sm" v-if="getCurrentEventInfo().isOnlineAvaliable">
					<label class="col-form-label col-md-6 col-lg-4" for="team__is-online">Участие</label>
					<select class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.is_online" name="is_online" id="team__is-online">
						<option value="" selected disabled hidden>-- дистанционное или очное --</option>
						<option value="true">Очное участие</option>
						<option value="false">Дистанционное участие</option>
					</select>
				</div>
				
				<div v-if="!!getCurrentEventInfo().questionList">
					<div class="event-questions mt-2">
						<h5>Пожалуйста ответьте на следующие вопросы:</h5>
						<div class="offset-md-6 col-md-6 offset-lg-4 col-lg-8">
							<div class="row my-3 small" v-html="getCurrentEventInfo().questionList.list"></div>
						</div>
					</div>

					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="team__how-learned-about">Поле для ответов</label>
						<textarea class="col-md-6 col-lg-8 form-control" id="team__how-learned-about" v-model="eventParticipationNote.answers"></textarea>
					</div>
				</div>				
				
				<div class="form-row my-1 mt-4 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="team__how-learned-about">Расскажите, как вы узнали о фестивале</label>
					<textarea class="col-md-6 col-lg-8 form-control" id="team__how-learned-about" v-model="eventParticipationNote.how_learned_about"></textarea>
				</div>

				<div class="form-check mt-3" v-if="getCurrentEventInfo().hasCoach">
					<input class=" form-check-input" type="checkbox" v-model="hasCoach" id="team__has-coach" @change.lazy="clearCoach">
					<label class="form-check-label" for="team__has-coach">У команды есть тренер (ментор)</label>
				</div>
			</div>

			<div class="form-block coach" v-if="hasCoach" id="coach">
				<h3>Сведения о тренере</h3>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__first-name">Имя</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.first_name" id="coach__first-name" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__last-name">Фамилия</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.last_name" id="coach__last-name" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__patronymic">Отчество</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.patronymic" id="coach__patronymic" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__workplace">Место работы</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.workplace" id="coach__workplace" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__position">Должность</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.position" id="coach__position" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__address">Адрес</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.address" id="coach__address" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__soc-media">Профиль в социальной сети</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.soc_media" id="coach__soc-media" type="text">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__birthdate">Дата рождения</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.birthdate" id="coach__birthdate" min="1920-01-01" max="2008-01-01" type="date">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__email">E-mail</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.email" id="coach__email" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="email">
				</div>
				<div class="form-row my-1 row-sm">
					<label class="col-form-label col-md-6 col-lg-4" for="coach__phone">Номер телефона</label>
					<input class="col-md-6 col-lg-8 form-control" v-model="eventParticipationNote.coach_attributes.phone" id="coach__phone" type="text">
				</div>
			</div>

			<div class="form-block participants" id="participants">
				<h3 v-if="getCurrentEventInfo().teamLimit > 1">Сведения об участниках</h3>
				<h3 v-if="getCurrentEventInfo().teamLimit === 1">Сведения об участнике</h3>
				<div v-if="getCurrentEventInfo().teamLimit > 2" class="form-row my-3 row-lg">
					<label class="col-form-label col-md-6 col-lg-4" for="participants__amount">Количество участников</label>
					<input class="col-form-label col-md-6 col-lg-8 form-control" id="participants__amount" v-model="teamMembersCount" min="2" :max="getCurrentEventInfo().teamLimit" @change.lazy="fixMembers" type="number">
				</div>

				<div v-if="teamMembersCount < 6 && teamMembersCount > 0" v-for="n in parseInt(teamMembersCount)" class="participants__block pt-3">
					<h5 v-if="teamMembersCount > 1" >Участник {{n}}</h5>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__first-name">Имя</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__first_name${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['first_name']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__last-name">Фамилия</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__last_name${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['last_name']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__patronymic">Отчество</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__patronymic${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['patronymic']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__university">Университет</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__university${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['university']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__speciality">Специальность</label>
						<input pattern="^[a-zA-Zа-яА-Я ,.'-]+$" class="col-md-6 col-lg-8 form-control" :id="`participants__speciality${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['speciality']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__year-of-study">Год обучения</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__year_of_study${n}`" type="number" min="1" max="11" v-model="eventParticipationNote.event_participants_attributes[n-1]['year_of_study']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__group">Группа</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__group${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['group']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__address">Адрес</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__address${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['address']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__birthdate">Дата рождения</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__birthdate${n}`" type="date" min="1950-01-01" max="2008-01-01" v-model="eventParticipationNote.event_participants_attributes[n-1]['birthdate']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__email">E-mail</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__email${n}`" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="email" v-model="eventParticipationNote.event_participants_attributes[n-1]['email']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__phone">Номер телефона</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__phone${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['phone']">
					</div>
					<div class="form-row my-1 row-sm">
						<label class="col-form-label col-md-6 col-lg-4" for="participants__soc-media">Профиль в социальной сети</label>
						<input class="col-md-6 col-lg-8 form-control" :id="`participants__soc_media${n}`" type="text" v-model="eventParticipationNote.event_participants_attributes[n-1]['soc_media']">
					</div>
				</div>
			</div>

			<div class="sensitive-data-agreement mt-4">
				Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в <router-link target="_blank" to="/sensitive">Согласии на обработку персональных данных</router-link>.
			</div>

			<div class="reg-form--btn-container mt-5">
				<input type="submit" value="Отправить" class="reg-form--btn">
			</div>

		</form>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { apiHost } from '@/config';

@Component
export default class RegisterEventForm extends Vue {
	public hasCoach = false;
	public teamMembersCount = '1';
	public eventParticipationNote = {
		how_learned_about: null,
		is_online:  '',
		title: null,
		answers: null,
		coach_attributes: {},
		event_participants_attributes: [{}, {}, {}, {}, {}, {}],
	};

	constructor() {
		super();
	}

	public clearCoach() {
		if (!this.hasCoach) {
			this.eventParticipationNote.coach_attributes = {};
		}
	}

	public fixMembers() {
		const mmbrsCount = parseInt(this.teamMembersCount, 10);

		if (mmbrsCount === 1) {
			this.eventParticipationNote.title = null;
		} else if (mmbrsCount > 3) {
			this.teamMembersCount = '3';
		} else if (mmbrsCount < 1) {
			this.teamMembersCount = '1';
		}
	}

	public mounted() {
		const tl = this.getCurrentEventInfo().teamLimit;
		if (tl > 1) {
			this.teamMembersCount = '2';
		} else if (tl === 1) {
			this.teamMembersCount = '1';
		}
	}

	public submitForm(event: any) {
		event.preventDefault();

		if (Object.keys(this.eventParticipationNote.coach_attributes).length === 0) {
			delete this.eventParticipationNote.coach_attributes;
		}

		if (this.eventParticipationNote.title === null) {
			delete this.eventParticipationNote.title;
		}

		if (event.srcElement.checkValidity()) {
			const formData = this.eventParticipationNote;
			formData.event_participants_attributes = formData.event_participants_attributes
				.splice(0, parseInt(this.teamMembersCount, 10));

			this.sendData(formData);
		}
	}

	public getCurrentEventInfo() {
		return this.$store.getters.getEvents.find((obj: any) => {
			return obj.id === parseInt(this.$route.params.id, 10);
		});
	}

	private sendData(formData: {}) {
		axios
			.post(`${apiHost}/events/${this.getCurrentEventInfo().id}/event_participation_notes`, formData)
			.then((resp: any) => {
				this.$router.replace('/register/finished');
			}, (resp: any) => {
				alert('Ошибка, проверьте правильность ввода');
			});
	}

	get getEvents() {
		return this.$store.getters.getEvents;
	}
}
</script>