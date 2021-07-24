import { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const quoteContext = createContext()

const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({})
  const [author, setAuthor] = useState()
  const [authorQuotes, setAuthorQuotes] = useState([])
  const history = useHistory()

  const fetchRandomQuote = async () => {
    const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random?count=1')
    const { data } = await response.json()
    const transformedQuote = {
      author: data[0].quoteAuthor,
      genre: data[0].quoteGenre,
      text: data[0].quoteText,
    }

    setAuthor(transformedQuote.author)
    setRandomQuote(transformedQuote)
  }

  const fetchAuthorQuotes = async () => {
    const response = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`
    )
    const { data } = await response.json()
    const transformedQuotes = data.map(quote => ({
      author: quote.quoteAuthor,
      genre: quote.quoteGenre,
      text: quote.quoteText,
      id: quote._id,
    }))
    setAuthorQuotes(transformedQuotes)
  }

  useEffect(() => {
    history.replace('/')
    fetchRandomQuote()
  }, [history])

  console.log(randomQuote)
  const ctx = {
    randomQuote,
    authorQuotes,
    fetchRandomQuote,
    fetchAuthorQuotes,
  }
  return <quoteContext.Provider value={ctx}>{children}</quoteContext.Provider>
}

export { quoteContext, QuoteContextProvider }
