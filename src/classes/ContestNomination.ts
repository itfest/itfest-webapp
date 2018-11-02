export default class ContestNomination {
	constructor(
		public id: number,
		public caption: string,
		public isAvailableForRegistration: boolean,
		public description: string | null,
	) {}
}
