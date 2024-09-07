const quotes = [
    "The best way to predict the future is to invent it. – Alan Kay",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Get your facts first, then you can distort them as you please. – Mark Twain",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr."
];

document.getElementById('newQuote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteText').textContent = quote;
});
