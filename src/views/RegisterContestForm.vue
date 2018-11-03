<template>
	<div class="register-form-page">
		<h1>{{this.eventInfo.title}}</h1>
		<p v-html="this.eventInfo.description"></p>
		<form class="reg-form" @submit="submitForm">
			<div class="form-block contest-work" id="contest-work">
				<h3 class="mb-4">Сведения о конкурсной работе</h3>
				<div class="form-row my-1">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__title">Номинация</label>
					<select required v-model="nominationId" class="col-md-6 col-lg-8 form-control">
						<option value="" selected disabled hidden>-- Выберите номинацию --</option>
						<option v-for="nomination in getContestNominations"
							    :key="nomination.id"
							    :value="nomination.id">{{nomination.caption}}</option>
					</select>
				</div>

				<div v-if="nominationId" class="offset-md-6 offset-lg-4 small mt-2 mb-4" v-html="getNominationById(nominationId).description"></div>

				<div class="form-row my-1">
					<label class="col-form-label col-md-6 col-lg-4"  for="contest-work__title">Название работы</label>
					<input class="col-md-6 col-lg-8 form-control" id="contest-work__title" name="title" type="text" v-model="contestWorkObject.work_title" required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,48}$">
				</div>

				<div class="form-row my-1">
					<label class="col-form-label col-md-6 col-lg-4"  for="contest-work__link">Ссылка на скачивание работы</label>
					<input required pattern="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$" class="col-md-6 col-lg-8 form-control" id="contest-work__link" placeholder="http://www.example.com/file.zip" name="title" type="text" v-model="contestWorkObject.ref_to_work">
				</div>

				<div class="form-row mb-2">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__how-software">Использованное ПО</label>
					<textarea pattern="^[a-zA-Zа-яА-Я ,.'-]+$" class="col-md-6 col-lg-8 form-control" id="contest-work__how-software" placeholder="Список использованного ПО, укажите версии" v-model="contestWorkObject.software"></textarea>
				</div>

				<div class="form-row my-3">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__how-learned-about">Расскажите, как вы узнали о фестивале</label>
					<textarea class="col-md-6 col-lg-8 form-control" id="contest-work__how-learned-about" v-model="contestWorkObject.how_learned_about"></textarea>
				</div>

				<div class="form-row my-3">
					<label class="col-form-label col-md-6 col-lg-4" for="contest-work__note">Сопроводительная записка</label>
					<textarea class="col-md-6 col-lg-8 form-control" id="contest-work__note" v-model="contestWorkObject.notes" placeholder="Тема проекта, цель, которую достигали во время реализации проекта"></textarea>
				</div>

				<div class="form-check mt-4">
					<input class=" form-check-input" type="checkbox" v-model="hasMentor" @change.lazy="clearMentor" id="contest-work__has-mentor">
					<label class="form-check-label" for="contest-work__has-mentor">Указать руководителя (преподавателя)</label>
				</div>
			</div>

			<div class="form-block mentor" v-if="hasMentor" id="mentor">
				<h3 class="mb-4">Сведения о руководителе работы</h3>
				<div class="form-row my-1">
					<label class="col-form-label col-md-6 col-lg-4" for="mentor__first-name">ФИО руководителя</label>
					<input class="col-md-6 col-lg-8 form-control" id="mentor__name" type="text" pattern="^[a-zA-Zа-яА-Я ,.'-]{2,48}$" placeholder="Иванов Иван Иванович" v-model="contestWorkObject.mentor">
				</div>
			</div>

			<div class="form-block participants">
				<div class="form-row my-3 row-lg">
					<label class="col-form-label col-md-6 col-lg-4" for="participants__amount">Количество авторов</label>
					<input class="col-form-label col-md-6 col-lg-8 form-control" id="participants__amount" min="1" max="3" type="number" maxlength="1" @change.lazy="clearTeamName" v-model="contestWorkMembersCount">
				</div>

				<div class="form-row my-1" v-if="parseInt(contestWorkMembersCount) > 1">
					<label class="col-form-label col-md-6 col-lg-4" for="mentor__first-name">Название творческого объединения</label>
					<input class="col-md-6 col-lg-8 form-control" required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,48}$" id="participants__team_name" type="text" v-model="contestWorkObject.team_name">
				</div>
				
				<h3 v-if="parseInt(contestWorkMembersCount) > 1">Сведения об авторах работы</h3>
				<h3 v-if="!(parseInt(contestWorkMembersCount) > 1)">Сведения об авторе работы</h3>
				<div v-if="contestWorkMembersCount < 6 && contestWorkMembersCount > 0" v-for="n in parseInt(contestWorkMembersCount)" class="participants__block pt-3">
					<h4 v-if="contestWorkMembersCount > 1">{{n}}-й автор</h4>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__last_name${n}`">Фамилия</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__last_name${n}`" placeholder="Иванов" type="text"  v-model="contestWorkObject.contest_work_members_attributes[n-1]['last_name']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__first_name${n}`">Имя</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__first_name${n}`" placeholder="Иван" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['first_name']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__patronymic${n}`">Отчество</label>
						<input required pattern="^[a-zA-Zа-яА-Я ,.'-]{2,16}$" class="col-md-6 col-lg-8 form-control" :id="`participants__patronymic${n}`" placeholder="Иванович" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['patronymic']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__birthdate${n}`">Дата рождения</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__birthdate${n}`" type="date" min="1950-01-01" max="2008-01-01" v-model="contestWorkObject.contest_work_members_attributes[n-1]['birthdate']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__university${n}`">Университет (Школа)</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__university${n}`" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['university']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__speciality${n}`">Специальность</label>
						<input pattern="^[a-zA-Zа-яА-Я ,.'-]+$" class="col-md-6 col-lg-8 form-control" :id="`participants__speciality${n}`" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['speciality']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__group${n}`">Группа (Класс)</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__group${n}`" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['group']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__year_of_study${n}`">Год обучения</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__year_of_study${n}`" type="number" min="1" max="11" minlength="1" maxlength="2" v-model="contestWorkObject.contest_work_members_attributes[n-1]['year_of_study']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__address${n}`">Адрес</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__address${n}`" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['address']">
					</div>
					<div class="form-row mt-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__email${n}`">E-mail</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__email${n}`" type="email" placeholder="example@mailserver.com" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" v-model="contestWorkObject.contest_work_members_attributes[n-1]['email']">
					</div>
					<div class="offset-md-5 offset-lg-4 small mb-2 font-italic text-muted">
						Пожалуйста, введите свой настоящий email, он будет использован для связи с организаторами.
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__phone${n}`">Номер телефона</label>
						<input required class="col-md-6 col-lg-8 form-control" :id="`participants__phone${n}`" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['phone']">
					</div>
					<div class="form-row my-1">
						<label class="col-form-label col-md-6 col-lg-4" :for="`participants__soc_media${n}`">Аккаунт в соц. сети</label>
						<input class="col-md-6 col-lg-8 form-control" :id="`participants__soc_media${n}`" placeholder="vk.com/it_fest_arh" type="text" v-model="contestWorkObject.contest_work_members_attributes[n-1]['soc_media']">
					</div>
					<div class="form-check mt-4 mb-2">
						<input class="form-check-input" type="checkbox" :id="`participants__show_email${n}`" v-model="contestWorkObject.contest_work_members_attributes[n-1]['show_email']">
						<label class="form-check-label" :for="`participants__show_email${n}`">В случае, если моя работа будет представлена на презентационном диске Фестиваля  указать мой e-mail</label>
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
import Modal from '@/components/Modal.vue';
import axios from 'axios';
import { apiHost } from '@/config';
import { create } from 'vue-modal-dialogs';


@Component
export default class RegisterContestForm extends Vue {

	public eventInfo = '';
	public hasMentor = false;
	public contestWorkMembersCount = '1';
	public nominationId = '';

	public contestWorkObject = {
		work_title: null,
		mentor: null,
		software: null,
		how_learned_about: null,
		notes: null,
		team_name: null,
		contest_work_members_attributes: [{}, {}, {}, {}, {}, {}],
	};

	constructor() {
		super();
	}

	public clearMentor() {
		if (!this.hasMentor) {
			this.contestWorkObject.mentor = null;
		}
	}

	public getNominationById(id: number) {
		return this.$store.getters.getContestNominations.find((obj: any) => {
			return obj.id === id;
		});
	}

	public clearTeamName() {
		const mmbrsCount = parseInt(this.contestWorkMembersCount, 10);

		if (mmbrsCount === 1) {
			this.contestWorkObject.team_name = null;
		} else if (mmbrsCount > 3) {
			this.contestWorkMembersCount = '3';
		} else if (mmbrsCount < 1) {
			this.contestWorkMembersCount = '1';
		}
	}

	public submitForm(event: any) {
		event.preventDefault();
		if (event.srcElement.checkValidity()) {
			const formData = this.contestWorkObject;
			formData.contest_work_members_attributes = formData.contest_work_members_attributes
				.splice(0, parseInt(this.contestWorkMembersCount, 10));

			this.sendData(formData);
		}
	}

	get getContestNominations() {
		return this.$store.getters.getContestNominations;
	}

	private sendData(formData: {}) {
		axios
			.post(`${apiHost}/contest_nominations/${this.nominationId}/contest_works`, formData)
			.then((resp: any) => {
				this.$router.replace('/register/finished');
			}, (resp: any) => {
				alert('Ошибка, проверьте правильность ввода');
			});
	}
}
</script>