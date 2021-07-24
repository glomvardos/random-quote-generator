import { useContext } from 'react'
import { quoteContext } from '../context/QuoteContext'
import renew from '../assets/autorenew.svg'

const Layout = ({ children }) => {
  const { fetchRandomQuote } = useContext(quoteContext)

  const randomQuoteHandler = () => fetchRandomQuote()

  return (
    <main className='p-5 lg:px-24 h-screen'>
      <header>
        <div className='flex flex-row-reverse'>
          <img onClick={randomQuoteHandler} className='cursor-pointer' src={renew} alt='renew' />
          <button onClick={randomQuoteHandler} className='bg-transparent pr-2 cursor-pointer'>
            random
          </button>
        </div>
      </header>
      <section className='h-full flex flex-col justify-center'>{children}</section>
    </main>
  )
}

export default Layout
