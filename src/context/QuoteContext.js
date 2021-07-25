import { createContext, useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'

const quoteContext = createContext()

const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({})
  const [author, setAuthor] = useState()
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // const history = useHistory()

  const fetchRandomQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://quote-garden.herokuapp.com/api/v3/quotes/random?count=1'
      )

      if (!response.ok) {
        throw new Error('Failed to load quotes! Please try again.')
      }

      const { data } = await response.json()
      const transformedQuote = {
        author: data[0].quoteAuthor,
        genre: data[0].quoteGenre,
        text: data[0].quoteText,
      }

      setAuthor(transformedQuote.author)
      setRandomQuote(transformedQuote)
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }

  const fetchAuthorQuotes = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=3`
      )

      if (!response.ok) {
        throw new Error('Failed to load quotes! Please try again.')
      }

      const { data } = await response.json()
      const transformedQuotes = data.map(quote => ({
        author: quote.quoteAuthor,
        genre: quote.quoteGenre,
        text: quote.quoteText,
        id: quote._id,
      }))
      setAuthorQuotes(transformedQuotes)
    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    // history.replace('/')
    fetchRandomQuote()
  }, [])

  const ctx = {
    randomQuote,
    authorQuotes,
    isLoading,
    error,
    fetchRandomQuote,
    fetchAuthorQuotes,
  }
  return <quoteContext.Provider value={ctx}>{children}</quoteContext.Provider>
}

export { quoteContext, QuoteContextProvider }
