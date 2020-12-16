import { Switch } from 'react-router-dom';
import Stocksearch from './components/stocksearch';
import Stocklist from './components/stocklist';
import Stockdata from './components/stockdata';

const App = () => {
  return (
    <div className="y-app">
      <header>
        {/* <Link to='/'>Home</Link> */}
        <img src={'/pump.png'} alt={"pumping profits logo"}></img>
        <Stocksearch />
      </header>
      <main>
        <div className="r-app">
          <div className="r1-app">
            <Stocklist />
          </div>
          <div className="r2-app">
          <Stockdata />
          </div>
          <Switch >
            {/* <Route expact path='/' component={Landing} /> */}
          </Switch>
        </div>
      </main>
      <footer>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  );
}

export default App;
