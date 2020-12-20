import { connect } from 'react-redux';

const StockDisplay = ({ tickerData }) => {

    if (tickerData === null) { return (<div></div>) }
    else {
        return (
            // console.log("TICKERDATA" + JSON.stringify(tickerData)),
            <div>
                <div>
                    <a href="https://iexcloud.io">IEX Cloud</a> - Real Time Data <br /> <br />
                </div>
                <div>
                    Ticker: {JSON.stringify(tickerData.symbol)} <br />
                    Price: {JSON.stringify(tickerData.latestPrice)}
                </div>
            </div>
        );
    };
};

const mapSTateToProps = (state) => ({
    tickerData: state.stockApi.tickers,
    activeTicker: state.activeSymbl
});

export default connect(mapSTateToProps)(StockDisplay);