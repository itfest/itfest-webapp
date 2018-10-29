export default class FestEvent {
	constructor(
		public id: number,
		public title: string,
		public description: string | null,
		public hasCoach: boolean,
		public hasQuestion: boolean,
		public isOnlineAvaliable: boolean,
		public teamLimit: number,
		public questionList: string | null,
	) {}
}
