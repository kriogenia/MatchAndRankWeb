import {Entry} from "../";

export default class StandardSystem {

	constructor(list) {
		this.entries = list.map((obj) => new Entry(obj.entry));
		this.candidates = [...this.entries];
	}

	start() {
		this.nextRound();
	}

	nextRound() {
		this.candidates = [...this.entries];
		if (this.candidates) {
			return this.nextMatch();
		} else {
			return null;
		}
	}

	nextMatch() {
		if (this.candidates) {
			let a = this.candidates.pop();
			let index = a.findOpponent(this.candidates);
			let b = this.candidates[index];
			this.candidates.splice(index, 1);
			a.clashed.push(b.name);
			b.clashed.push(a.name);
			return { a: a, b: b };
		} else {
			return this.nextRound();
		}
	}

	getExpectedMatches() {
		let i = 0;
		return this.entries.map(() => i++).reduce((total, n) => total + n, 0);
	}

}