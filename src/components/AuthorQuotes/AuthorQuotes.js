import { useContext } from 'react'
import { quoteContext } from '../../context/QuoteContext'
import AuthorQuote from './AuthorQuote.js/AuthorQuote'

const AuthorQuotes = () => {
  const { randomQuote, authorQuotes } = useContext(quoteContext)
  const displayQuotes = authorQuotes.map(quote => <AuthorQuote key={quote.id} text={quote.text} />)

  return (
    <div>
      <h2 className='mb-14 md:mb-24 text-2xl md:text-4xl font-bold text-bgDark'>
        {randomQuote.author}
      </h2>
      <div className='mx-auto'>{displayQuotes}</div>
    </div>
  )
}

export default AuthorQuotes
