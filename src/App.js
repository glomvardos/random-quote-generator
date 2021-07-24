import Layout from './components/UI/Layout'
import RandomQuote from './components/RandomQuote/RandomQuote'
import AuthorQuotes from './components/AuthorQuotes/AuthorQuotes'
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <RandomQuote />
        </Route>
        <Route exact path='/author-quotes'>
          <AuthorQuotes />
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
