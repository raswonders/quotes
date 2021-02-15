function main() {
    let quotes = loadQuotes();
    sessionStorage.setItem('quoteIndex', getQuoteIndex());
    displayQuote(quotes)
}


function loadQuotes() {
    return JSON.parse(quotes_str);
}


function displayQuote(quotes) {
    let i = sessionStorage.getItem('quoteIndex');
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


function next() {
    console.log('Next()')
}


function prev() {
    console.log('Prev()')
}
