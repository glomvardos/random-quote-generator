import { useContext } from 'react'
import { quoteContext } from '../context/QuoteContext'

import rightArrow from '../assets/right-arrow.svg'

const Author = () => {
  const { randomQuote } = useContext(quoteContext)

  return (
    <a
      className='mt-24 ml-auto px-8 py-12 flex justify-between items-center  max-w-authorWidth text-authorColorDark transition-all duration-200 hover:text-authorColorLight hover:bg-bgDark'
      href='#'
    >
      <div>
        <h2 className='font-bold text-2xl mb-2'>{randomQuote.author}</h2>
        <p className='font-medium text-sm text-genreColor'>{randomQuote.genre}</p>
      </div>
      <img src={rightArrow} all='right arrow icon' />
    </a>
  )
}

export default Author
