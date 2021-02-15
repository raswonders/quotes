function main() {
    let quotes = loadQuotes();
    displayQuote(quotes);
}


function loadQuotes() {
    return JSON.parse(quotes_str)
}


function displayQuote(quotes) {
    document.getElementById("quote").innerHTML = quotes[67].quote;
    document.getElementById("author").innerHTML = quotes[67].author;
}