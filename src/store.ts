import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import GridListObject from '@/classes/GridListObject.ts';
import Partner from '@/classes/Partner.ts';
import FestEvent from '@/classes/FestEvent.ts';
import ContestNomination from '@/classes/ContestNomination.ts';
import { apiHost } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		generalInfo: {
			isApiResponding: true,
			isRegistraionActive: true,
			dates: '15-17 ДЕКАБРЯ 2018г.',
			annotation: 'Пожалуйста, подождите',
			footer: 'Пожалуйста, подождите',
		},
		annotationElements: [],
		informationElements: [],
		partners: [],
		pages: [],
		events: [],
		contestNominations: [],
		dimentions: {
			header: 293,
			footer: 228,
		},
	},
	getters: {
		getAnnotationElements(state: any) {
			return state.annotationElements.map((e: any) => {
				return new GridListObject( e.id, e.title, e.content, 'Подробнее', e.link, e.created_at, e.updated_at);
			});
		},
		getInformationElements(state: any) {
			return state.informationElements.map((e: any) => {
				return new GridListObject( e.id, e.title, e.content, 'Подробнее', e.link, e.created_at, e.updated_at);
			});
		},
		getPartners(state: any) {
			return state.partners.map((e: any) => {
				return new Partner( e.id, e.name, e.link, `${apiHost}/${e.logo.url}`, e.created_at, e.updated_at);
			});
		},
		getDimentions(state: any) {
			return state.dimentions;
		},
		getInfo(state: any) {
			return state.generalInfo;
		},
		getEvents(state: any) {
			return state.events.map((e: any) => {
				return new FestEvent(
					e.id,
					e.title,
					e.description,
					e.has_coach,
					e.has_question,
					e.is_online_participation_available,
					parseInt(e.team_limit, 10),
					e.question_list,
					e.is_registration_available,
				);
			});
		},
		getContestNominations(state: any) {
			return state.contestNominations.map((e: any) => {
				return new ContestNomination(
					e.id,
					e.caption,
					e.availible_for_registration,
					e.description,
				);
			});
		},
		getPageList(state: any) {
			return state.pages;
		},
	},
	mutations: {
		set(state: any, {type, items}) {
			state[type] = items;
		},
		setDimention(state: any, {element, value}) {
			state.dimentions[element] = value;
		},
		setGeneralInfo(state: any, value) {
			if (value === false || value === null) {
				state.generalInfo.isApiResponding = state.generalInfo.isRegistraionActive = false;
				state.generalInfo.annotation = 'Ресурс недоступен, пожалуйста зайдите позднее или попробуйте обновить страницу';
				state.generalInfo.footer = 'Ресурс недоступен, пожалуйста зайдите позднее или попробуйте обновить страницу';
			} else {
				state.generalInfo.isApiResponding = true;
				state.generalInfo.isRegistraionActive = value.is_registration_active;
				state.generalInfo.dates = value.dates;
				state.generalInfo.annotation = value.annotation;
				state.generalInfo.footer = value.footer;
			}
		},
	},
	actions: {
		getAnnotationElementsFromApi({commit}) {
			axios
				.get(`${apiHost}/annotations`)
				.then((resp: any) => {
					commit('set', { type: 'annotationElements', items: resp.data });
				}, () => {
					commit('set', { type: 'annotationElements', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getInformationElementsFromApi({commit}) {
			axios
				.get(`${apiHost}/information_elements`)
				.then((resp: any) => {
					commit('set', { type: 'informationElements', items: resp.data });
				}, () => {
					commit('set', { type: 'informationElements', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getPartnersFromApi({commit}) {
			axios
				.get(`${apiHost}/partners`)
				.then((resp: any) => {
					commit('set', { type: 'partners', items: resp.data });
				}, () => {
					commit('set', { type: 'partners', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getInfoFromApi({commit}) {
			axios
				.get(`${apiHost}/general/info`)
				.then((resp: any) => {
					commit('setGeneralInfo', resp.data);
				}, () => {
					commit('setGeneralInfo', false);
				});
		},
		getPageListFromApi({commit}) {
			axios
				.get(`${apiHost}/pages`)
				.then((resp: any) => {
					commit('set', { type: 'pages', items: resp.data });
				}, () => {
					commit('set', { type: 'pages', items: [] });

					commit('set', false);
				});
		},
		getEventListFromApi({commit}) {
			axios
				.get(`${apiHost}/events`)
				.then((resp: any) => {
					commit('set', { type: 'events', items: resp.data });
				}, () => {
					commit('set', { type: 'events', items: [] });

					commit('set', false);
				});
		},
		getContestNominationsFromApi({commit}) {
			axios
				.get(`${apiHost}/contest_nominations`)
				.then((resp: any) => {
					commit('set', { type: 'contestNominations', items: resp.data });
				}, () => {
					commit('set', { type: 'contestNominations', items: [] });

					commit('set', false);
				});
		},
	},
});
