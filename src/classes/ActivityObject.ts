export default class ActivityObject {
	constructor(
		public heading: string,
		public text: string | null,
		public linkText: string | null,
		public linkUri: string | null,
	) {}
}
