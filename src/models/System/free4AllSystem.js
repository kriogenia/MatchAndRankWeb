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
			console.log(this.a);
			let index = this.a.findOpponent(this.candidates);
			if (index === -1) { return this.nextMatch(); }			// This candidate doesnt have available opponents
			this.b = this.candidates[index];
			console.log(this.b);
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
		let sorted = this.entries.sort((a,b) => a.points - b.points);
		console.log(sorted);
		while (sorted.length > 0) {
			let step = sorted.filter((x) => x.points === sorted[0].points);
			results = [...results, ...this.decideDraw(step)];
			console.log(results);
		}
		return results;
	}

	decideDraw(step) {
		if (step.length === 1) { return step }
		let map = new Map(step.map((e) => [e.name, e.getWins(step)]));
		return step.sort((x,y) => map[x.name] - map[y.name]);
	}

}