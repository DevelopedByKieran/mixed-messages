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
  },
  {
    _author: "Aristotle",
    _quote: "It is during our darkest moments that we must focus to see the light.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Mahatma Gandhi",
    _quote: "In a gentle way, you can shake the world.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Joseph Campbell",
    _quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Albert Einstein",
    _quote: "Life is like riding a bicycle.  To keep your balance, you must keep moving.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Dolly Parton",
    _quote: "If you don't like the road you're walking, start paving another one!",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "George Eliot",
    _quote: "It is never too late to be what you might have been.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  },
  {
    _author: "Dr. Seuss",
    _quote: "You have brains in your head.  You have feet in your shoes.  You can steer yourself any direction you choose.",
    get fullQuote () {
        return `${this._quote} - ${this._author}`;
    }
  }
];

// A function to generate a random quote with the author name
const randomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return `${quotes[randomIndex].fullQuote}`;
}

console.log(randomQuote());