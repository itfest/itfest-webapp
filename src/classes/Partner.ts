export default class Partner {
	constructor(
		public id: number,
		public name: string,
		public linkUri: string | null,
		public imgUrl: string | null,
		public createdAt: Date | null,
		public updatedAt: Date | null,
	) {}
}
