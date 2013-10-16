var DeckInfo = {
	suits: ['H','D','C','S'],
	ranks: [
		{rank: '2', value: 1},
		{rank: '3', value: 2},
		{rank: '4', value: 3},
		{rank: '5', value: 4},
		{rank: '6', value: 5},
		{rank: '7', value: 6},
		{rank: '8', value: 7},
		{rank: '9', value: 8},
		{rank: '10', value: 9},
		{rank: 'J', value: 10},
		{rank: 'Q', value: 11},
		{rank: 'K', value: 12},
		{rank: 'A', value: 13}
	],

	checkSuit: function (suit) {
		var i, len;

		for (i = 0, len = this.suits.length; i < len; i += 1) {
			if (suit === this.suits[i]) {
				return true;
			}
		}

		return false;
	},

	checkRank: function (rank) {
		var i, len;

		for (i = 0, len = this.ranks.length; i < len; i += 1) {
			if (rank === this.ranks[i].rank) {
				return this.ranks[i];
			}
		}

		return false;
	}
};

var Card = function (suit, rank) {
	this.init(suit, rank);
};

Card.prototype = {
	constructor: Card,

	suit: null,
	rank: null,

	init: function (suit, rank) {
		this.setSuit(suit);
		this.setRank(rank);
	},

	setSuit: function (suit) {
		if (DeckInfo.checkSuit(suit)) {
			this.suit = suit;
			return true;
		}
		else {
			throw "Invalid suit";
			return false;
		}
	},

	setRank: function (rank) {
		if (typeof DeckInfo.checkRank(rank) === 'object') {
			this.rank = rank;
			return true;
		}
		else {
			throw "Invalid rank";
			return false;
		}
	},

	getSuit: function () {
		return this.suit;
	},

	getSuitSymbol: function () {
		switch (this.suit) {
			case 'S':
				return "♠";
				break;
			case 'H':
				return "♡";
				break;
			case 'D':
				return "♢";
				break;
			case 'C':
				return "♣";
				break;
		}
	},

	getRank: function () {
		return this.rank;
	}
};

/**
 * Create and shuffle a poker deck.
 *
 * @constructor
 */
var DeckBuilder = {

	deck: [],

	create: function () {
		this._construct();
		return this;
	},

	_construct: function () {
		this.setup();
	},

	setup: function () {
		var i, j, iLen, jLen;

		// fill the deck with cards
		if (this.deck.length === 0) {
			for (i = 0, iLen = DeckInfo.suits.length; i < iLen; i += 1) {
				for (j = 0, jLen = DeckInfo.ranks.length; j < jLen; j += 1) {
					this.deck.push(new Card(DeckInfo.suits[i], DeckInfo.ranks[j].rank));
				}
			}
		}
		else {
			throw "Deck not empty";
		}

		for (i = 0, iLen = this.deck.length; i < iLen; i += 1) {
			console.log(i + ': ' + this.deck[i].getRank() + this.deck[i].getSuitSymbol());
		}
	}

};

/**
 * Configurably deal a hold'em hand face up
 *
 * @constructor
 */
var Caulfield = {

};

(function () {
	var deckBuilder = DeckBuilder.create();
})()