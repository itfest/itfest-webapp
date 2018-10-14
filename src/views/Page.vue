<template>
	<div class="page" v-html="this.pageContent">
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import axios from 'axios';
	import { apiHost } from '@/config';

	@Component
	export default class Page extends Vue {
		public pageContent = '';
		public pageTitle = '';
		public pageSlug = '';

		constructor() {
			super();
		}

		public mounted() {
			axios
				.get(`${apiHost}/pages/${this.$route.params.id}`)
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