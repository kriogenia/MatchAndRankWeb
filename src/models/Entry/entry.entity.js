export default class Entry {

	constructor(name) {
		this.name = name;
		this.points = 0;
		this.clashed = [];
		this.won = [];
	}

	findOpponent(list) {
		for (let i = 0; i < list.length; i++) {
			if (!this.clashed.includes(list[i].name)) {
				return i;
			}
		}
		return -1;
	}

	getWins(list) {
		return list.reduce((x,y) => this.won.includes(y.name) ? x+1 : x, 0);
	}

}