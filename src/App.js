import { useContext } from 'react'
import Layout from './components/UI/Layout'
import RandomQuote from './components/RandomQuote/RandomQuote'
import AuthorQuotes from './components/AuthorQuotes/AuthorQuotes'
import Spinner from './components/UI/Spinner/Spinner'
import Error from './components/UI/Error'
import { Switch, Route, Redirect } from 'react-router-dom'
import { quoteContext } from './context/QuoteContext'

const App = () => {
  const { isLoading, error } = useContext(quoteContext)

  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          {isLoading ? <Spinner /> : error ? <Error message={error} /> : <RandomQuote />}
        </Route>
        <Route exact path='/author-quotes'>
          {isLoading ? <Spinner /> : error ? <Error message={error} /> : <AuthorQuotes />}
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
