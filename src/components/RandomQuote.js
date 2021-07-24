import { useContext } from 'react'
import { quoteContext } from '../context/QuoteContext'

import Author from './Author'

const RandomQuote = () => {
  const { randomQuote } = useContext(quoteContext)

  return (
    <div className='mx-auto'>
      <article className='max-w-custom flex justify-between'>
        <div className='border-4 border-solid border-borderColor mr-7 md:mr-24'></div>
        <div className='font-medium text-xl md:text-4xl md:leading-custom'>
          “{randomQuote.text}”
        </div>
      </article>
      <Author />
    </div>
  )
}

export default RandomQuote
