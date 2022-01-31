const quotes = [
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: " - Eleanor Roosevelt",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: " - Mother Teresa",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: " - Margaret Mead",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: " - Aristotle",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: " - Nelson Mandela",
    },
    {
        quote: "Never regret anything that made you smile.",
        author: " - Mark Twain",
    },
    {
        quote: "Kindness always comes back.",
        author: " - k.tolnoe",
    },
    {
        quote: "What is life, Without a little rist.",
        author: " - J.K.Roling",
    },
    {
        quote: "This is just the way i am.",
        author: " - LANY",
    },
    {
        quote: "I like me better when I'm with you.",
        author: " - Lauv",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;