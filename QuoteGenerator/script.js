
let apiQuotes = []

//show new quote function
function newQuote() {
    // pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
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



