import './App.css'
import{BrowserRouter, Route, Switch} from 'react-router-dom'

//page components
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'


function App() {
  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          {/* <Route path="/search">
            <Search />
          </Route> */}
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App