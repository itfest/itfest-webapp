import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import GridListObject from '@/classes/GridListObject.ts';
import Partner from '@/classes/Partner.ts';

Vue.use(Vuex);

const urlBase = 'http://localhost:3000/';

export default new Vuex.Store({
	state: {
		generalInfo: {
			isApiResponding: true,
			isRegistraionActive: true,
			dates: '15-17 ДЕКАБРЯ 2018г.',
			annotation: 'Пожалуйста, подождите',
		},
		annotationElements: [],
		informationElements: [],
		partners: [],
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
				return new Partner( e.id, e.name, e.link, `${urlBase}${e.logo.url}`, e.created_at, e.updated_at);
			});
		},
		getDimentions(state: any) {
			return state.dimentions;
		},
		getInfo(state: any) {
			return state.generalInfo;
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
			} else {
				state.generalInfo.isApiResponding = true;
				state.generalInfo.isRegistraionActive = value.is_registration_active;
				state.generalInfo.dates = value.dates;
				state.generalInfo.annotation = value.annotation;
			}
		},
	},
	actions: {
		getAnnotationElementsFromApi({commit}) {
			axios
				.get(`${urlBase}/annotations`)
				.then((resp: any) => {
					commit('set', { type: 'annotationElements', items: resp.data });
				}, () => {
					commit('set', { type: 'annotationElements', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getInformationElementsFromApi({commit}) {
			axios
				.get(`${urlBase}/information_elements`)
				.then((resp: any) => {
					commit('set', { type: 'informationElements', items: resp.data });
				}, () => {
					commit('set', { type: 'informationElements', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getPartnersFromApi({commit}) {
			axios
				.get(`${urlBase}/partners`)
				.then((resp: any) => {
					commit('set', { type: 'partners', items: resp.data });
				}, () => {
					commit('set', { type: 'partners', items: [] });
					commit('setGeneralInfo', false);
				});
		},
		getInfoFromApi({commit}) {
			axios
				.get(`${urlBase}/general/info`)
				.then((resp: any) => {
					commit('setGeneralInfo', resp.data);
				}, () => {
					commit('setGeneralInfo', false);
				});
		},
	},
});
