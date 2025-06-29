// Initial array of quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Get busy living or get busy dying.", category: "Life" },
];

// Populate category filter on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCategoryFilter();
  displayRandomQuote();

  document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
});

// ✅ Renamed from showRandomQuote to displayRandomQuote
function displayRandomQuote() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  const filteredQuotes = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category.toLowerCase() === selectedCategory.toLowerCase());

  const quoteDisplay = document.getElementById("quoteDisplay");

  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No quotes found for this category.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];
  quoteDisplay.textContent = `"${quote.text}" — [${quote.category}]`;
}

// ✅ Keep function name as 'addQuote' as required
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (!text || !category) {
    alert("Please fill in both quote and category.");
    return;
  }

  quotes.push({ text, category });
  textInput.value = "";
  categoryInput.value = "";
  updateCategoryFilter();
  alert("Quote added successfully!");
}

// Updates the category dropdown dynamically
function updateCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  const categories = Array.from(new Set(quotes.map(q => q.category)));

  select.innerHTML = `<option value="all">All</option>`;
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });
}
