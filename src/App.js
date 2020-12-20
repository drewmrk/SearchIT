import React from 'react'
import './db/config'
import { AuthProvider } from './services/Authentication'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './routes/Protected'
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import PageHome from './pages/Home'
import PageCreate from './pages/Create'
import PageAsset from './pages/Asset'

const App = () => (
  <div className="App">
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={PageHome} />
          <ProtectedRoute path="/create" component={PageCreate} />
          <ProtectedRoute path="/asset/:id" component={PageAsset} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  </div>
)

export default App
