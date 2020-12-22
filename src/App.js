import { Switch } from 'react-router-dom';
// import { Stocksearch, Stocklist, Stockdata, Stockdisplay } from './components'
import Stocksearch from './components/stocksearch';
import Stocklist from './components/stocklist';
import Stockdata from './components/stockdata';
import Stockdisplay from './components/stockdisplay';
import SetTicker from './components/setticker';

const App = () => {
  return (
    <div className="y-app">
      <header>
        {/* <Link to='/'>Home</Link> */}
        <img src={'/pump.png'} alt={"pumping profits logo"}></img>
        <Stocksearch />
      </header>
      <main>
        <div className="wrapper">
          <div className="one">
            <Stocklist />
          </div>
          <div className="box box1">
            <div className="two">
              <Stockdata />
              <SetTicker />
            </div>
            <div className="three">
              <Stockdisplay />
            </div>
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
