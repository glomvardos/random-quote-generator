import { useContext } from 'react'
import { quoteContext } from '../../context/QuoteContext'
import { useHistory } from 'react-router'

import renew from '../../assets/autorenew.svg'

const Layout = ({ children }) => {
  const { fetchRandomQuote } = useContext(quoteContext)
  const history = useHistory()

  const randomQuoteHandler = () => {
    history.replace('/')
    fetchRandomQuote()
  }

  return (
    <main className='p-5 lg:px-24 h-screen flex flex-col'>
      <header className='flex flex-row-reverse mb-12'>
        <img onClick={randomQuoteHandler} className='cursor-pointer' src={renew} alt='renew' />
        <button onClick={randomQuoteHandler} className='bg-transparent pr-2 cursor-pointer'>
          random
        </button>
      </header>
      <section className='my-auto flex justify-center items-center'>{children}</section>
    </main>
  )
}

export default Layout
