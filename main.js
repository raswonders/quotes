const quotes = loadQuotes();


function main() {
    sessionStorage.setItem('quoteIndex', getQuoteIndex());
    displayQuote()
}


function loadQuotes() {
    return JSON.parse(quotes_str);
}


function displayQuote() {
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


function indexOutOfBound(index) {
    return index < 0 || index >= quotes.length;
}


function next() {
    let i = sessionStorage.getItem('quoteIndex');
    if (indexOutOfBound(++i)) {
        return;
    }
    sessionStorage.setItem('quoteIndex', i);
    displayQuote();
}


function prev() {
    console.log('Prev()')
}


