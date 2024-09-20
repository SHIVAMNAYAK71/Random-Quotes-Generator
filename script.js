const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "sdffghjjk"
];

const quoteElement = document.getElementById('quote');
const buttonElement = document.getElementById('new-quote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

buttonElement.addEventListener('click', () => {
    quoteElement.textContent = getRandomQuote();
});
