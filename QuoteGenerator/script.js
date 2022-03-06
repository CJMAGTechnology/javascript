const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')



let apiQuotes = []

//show new quote function
function newQuote() {
    // pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author 
    quoteText.textContent = quote.text 
}

// get from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try{

        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()


    }catch (error) {

        alert(error)

    }
}

//on load
getQuotes();



