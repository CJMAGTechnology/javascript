const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


let apiQuotes = []

//show loading
function loading(){
    loader.hidden = false
    quoteContainer.hidden = true

}

//hide loading
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

//show new quote function
function newQuote() {
    loading()
    // pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

        // check if field blank

    if(!quote.author){
        authorText.textContent = 'Unknown'
    }else {
        authorText.textContent = quote.author 
    }
        quoteText.textContent = quote.text 
    // check length for styling
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }

    //set quote hide loader
    quoteText.textContent = quote.text
    complete()

}

// get from api
async function getQuotes() {
    loading()
    const apiUrl = 'https://type.fit/api/quotes'
    try{

        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()


    }catch (error) {

        alert(error)

    }
}


//for twitter
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//on load
getQuotes();



