function main() {
    let quotes = loadQuotes();
    displayQuote(quotes);
}


function loadQuotes() {
    return JSON.parse(quotes_str);
}


function displayQuote(quotes) {
    let i = getQuoteIndex();
    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("author").innerHTML = quotes[i].author;
}


function getQuoteIndex() {
    let startDate = new Date('02/15/2021');
    let today = new Date();
    let msDiff =  Math.abs(today.getTime() - startDate.getTime());
    let msInDay = 1000 * 3600 * 24;
    return Math.floor(msDiff / msInDay);
}