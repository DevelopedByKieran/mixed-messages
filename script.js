// An array of objects containing quotes and the author
const quotes = [
  {
    author: "Carol Burnett",
    quote: "When you have a dream, you've got to grab it and never let go.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Martin Luther King, Jr.",
    quote: "Out of the mountain of despair, a stone of hope.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Audrey Hepburn",
    quote: "Nothing is impossible. The word itself says 'I'm Possible!'",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Alexander the Great",
    quote: "There is nothing impossible to they who will try.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Michael Altshuler",
    quote: "The bad news is time flies.  The good news is you're the pilot.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Walt Whitman",
    quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Winston Churchill",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "C.S. Lewis",
    quote: "You are never too old to set another goal or to dream a new dream.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  },
  {
    author: "Roald Dahl",
    quote: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    get fullQuote () {
        return `${this.quote} - ${this.author}`;
    }
  }
];

// A function to generate a random quote with the author name
const randomQuote = () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return `${quotes[randomNumber].fullQuote}`;
}

console.log(randomQuote());