<template>
	<div class="page" v-html="this.pageContent">
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
	export default class Page extends Vue {
		public pageContent = '';
		public pageTitle = '';
		public pageSlug = '';

		constructor() {
			super();
		}

		public beforeRouteUpdate(to: any, from: any, next: () => {}) {
			this.fillInWithContent(this.$route.params.id);
			next();
		}

		public mounted() {
			this.fillInWithContent(this.$route.params.id);
		}

		private fillInWithContent(id: string) {
			axios
				.get(`${apiHost}/pages/${id}`)
				.then((resp: any) => {
					this.pageContent = resp.data.content;
					this.pageTitle = resp.data.title;
					this.pageSlug = resp.data.slug;
				}, () => {
					this.$router.replace('/404');
				});	
		}
	}
</script>