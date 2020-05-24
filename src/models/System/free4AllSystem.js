import {Entry} from "../";

export default class Free4AllSystem {

	constructor(list) {
		this.entries = list.map((obj) => new Entry(obj.entry));
		this.candidates = [...this.entries];
	}

	nextRound() {
		this.candidates = [...this.entries].filter((e) => e.clashed.length < this.entries.length - 1);
		if (this.candidates.length > 1) {
			return this.nextMatch();
		} else {
			return null;
		}
	}

	nextMatch() {
		if (this.candidates.length > 1) {
			this.a = this.candidates.pop();
			let index = this.a.findOpponent(this.candidates);
			if (index === -1) { return this.nextMatch(); }			// This candidate doesnt have available opponents
			this.b = this.candidates[index];
			this.candidates.splice(index, 1);
			this.a.clashed.push(this.b.name);
			this.b.clashed.push(this.a.name);
			return { a: this.a, b: this.b, expected: this.getExpectedMatches()};
		} else {
			return this.nextRound();
		}
	}

	getExpectedMatches() {
		let i = 0;
		return this.entries.map(() => i++).reduce((total, n) => total + n, 0);
	}

	voteLeft() {
		this.a.points++;
		this.a.won.push(this.b.name);
	}

	voteRight() {
		this.b.points++;
		this.b.won.push(this.a.name);
	}

	getResults() {
		let results = [];
		let sorted = this.entries.sort((a,b) => b.points - a.points);
		while (sorted.length > 0) {
			let points = sorted[0].points;
			let step = sorted.filter((x) => x.points === points);
			sorted = sorted.filter((x) => x.points !== points);
			results = [...results, ...this.decideDraw(step)];
		}
		return results;
	}

	decideDraw(step) {
		if (step.length === 1) { return step; }
		let map = new Map(step.map((e) => [e.name, e.getWins(step)]));
		return step.sort((x,y) => map[y.name] - map[x.name]);
	}

}