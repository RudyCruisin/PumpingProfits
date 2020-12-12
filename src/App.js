import { Link, Route, Switch } from 'react-router-dom';
import Stocksearch from './components/stocksearch';

const App = () => {
  return (
    <div className="y-app">
      <header>
        {/* <Link to='/'>Home</Link> */}
        <Stocksearch />
      </header>
      <main>
        this is the new repo!
      <Switch >
          {/* <Route expact path='/' component={Landing} /> */}
        </Switch>
      </main>
      <footer>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
}

export default App;
