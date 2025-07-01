const quotes = [
  { text: "The only limit is your mind.", category: "Motivation" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "Do what is right, not what is easy.", category: "Life" }
];

const quoteDisplay = document.getElementById('quoteDisplay');
const categoryFilter = document.getElementById('categoryFilter');

function populateCategories() {
  const categories = [...new Set(quotes.map(q => q.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

function showRandomQuote() {
  const selectedCategory = categoryFilter.value;
  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No quotes available for this category.";
    return;
  }

  const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  quoteDisplay.textContent = `"${randomQuote.text}" — ${randomQuote.category}`;
}

function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (!text || !category) {
    alert("Please enter both quote text and category.");
    return;
  }

  quotes.push({ text, category });

  if (![...categoryFilter.options].some(opt => opt.value === category)) {
    const newOption = document.createElement('option');
    newOption.value = category;
    newOption.textContent = category;
    categoryFilter.appendChild(newOption);
  }

  textInput.value = "";
  categoryInput.value = "";
  alert("Quote added successfully!");
}

document.getElementById('newQuote').addEventListener('click', showRandomQuote);
categoryFilter.addEventListener('change', showRandomQuote);

populateCategories();
