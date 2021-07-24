import { createContext, useEffect, useState } from 'react'

const quoteContext = createContext()

const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState({})

  const fetchRandomQuote = async () => {
    const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random?count=1')
    const { data } = await response.json()
    const transformedQuote = {
      author: data[0].quoteAuthor,
      genre: data[0].quoteGenre,
      text: data[0].quoteText,
      id: data[0]._id,
    }

    setRandomQuote(transformedQuote)
  }

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  console.log(randomQuote)
  const ctx = {
    randomQuote,
    fetchRandomQuote,
  }
  return <quoteContext.Provider value={ctx}>{children}</quoteContext.Provider>
}

export { quoteContext, QuoteContextProvider }
