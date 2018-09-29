export default class GridListObject {
	constructor(
		public id: number,
		public heading: string,
		public text: string | null,
		public linkText: string | null,
		public linkUri: string | null,
		public createdAt: Date | null,
		public updatedAt: Date | null,
	) {}
}

