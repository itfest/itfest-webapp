import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import GridListObject from '@/classes/GridListObject.ts';
import Partner from '@/classes/Partner.ts';

Vue.use(Vuex);

const urlBase = 'http://localhost:3000/';

export default new Vuex.Store({
	state: {
		isRegistrationAvailable: true,
		annotationElements: [],
		informationElements: [],
		partners: [],
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
	},
	mutations: {
		set(state: any, {type, items}) {
			state[type] = items;
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
				});
		},
		getInformationElementsFromApi({commit}) {
			axios
				.get(`${urlBase}/information_elements`)
				.then((resp: any) => {
					commit('set', { type: 'informationElements', items: resp.data });
				}, () => {
					commit('set', { type: 'informationElements', items: [] });
				});
		},
		getPartnersFromApi({commit}) {
			axios
				.get(`${urlBase}/partners`)
				.then((resp: any) => {
					commit('set', { type: 'partners', items: resp.data });
				}, () => {
					commit('set', { type: 'partners', items: [] });
				});
		},
	},
});
