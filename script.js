// An array of objects containing quotes and the author
const quotes = [
  {
    _author: "Carol Burnett",
    _quote: "When you have a dream, you've got to grab it and never let go.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Martin Luther King, Jr.",
    _quote: "Out of the mountain of despair, a stone of hope.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Audrey Hepburn",
    _quote: "Nothing is impossible. The word itself says 'I'm Possible!'",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Alexander the Great",
    _quote: "There is nothing impossible to they who will try.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Michael Altshuler",
    _quote: "The bad news is time flies.  The good news is you're the pilot.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Walt Whitman",
    _quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Winston Churchill",
    _quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "C.S. Lewis",
    _quote: "You are never too old to set another goal or to dream a new dream.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Theodore Roosevelt",
    _quote: "Believe you can and you're halfway there.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Roald Dahl",
    _quote: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  }
];

// A function to generate a random quote with the author name
const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return `${quotes[randomNumber].fullQuote}`;
}

console.log(randomQuote());