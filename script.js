// Initial quotes
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "The journey of a thousand miles begins with one step.", category: "Wisdom" }
];

document.addEventListener('DOMContentLoaded', () => {
  updateCategoryDropdown();
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
});

function showRandomQuote() {
  const category = document.getElementById('categoryFilter').value;
  const filteredQuotes = quotes.filter(quote => category === "All" || quote.category === category);
  const random = Math.floor(Math.random() * filteredQuotes.length);

  const quoteDisplay = document.getElementById('quoteDisplay');
  if (filteredQuotes.length > 0) {
    quoteDisplay.textContent = `"${filteredQuotes[random].text}" — ${filteredQuotes[random].category}`;
  } else {
    quoteDisplay.textContent = "No quotes available for this category.";
  }
}

function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');
  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    textInput.value = "";
    categoryInput.value = "";
    updateCategoryDropdown();
    alert("Quote added!");
  } else {
    alert("Please fill in both fields.");
  }
}

function updateCategoryDropdown() {
  const select = document.getElementById('categoryFilter');
  const categories = Array.from(new Set(quotes.map(q => q.category)));
  categories.unshift("All");

  select.innerHTML = "";
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });
}
