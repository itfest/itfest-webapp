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
	},
	getters: {
		getAnnotationElements(state: any) {
			return state.annotationElements.data.map((e: any) => {
				return new GridListObject( e.id, e.title, e.content, 'Подробнее', e.link, e.created_at, e.updated_at);
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
				});
		},
	},
});
