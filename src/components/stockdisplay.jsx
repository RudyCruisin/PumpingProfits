import { connect } from 'react-redux';

const StockDisplay = ({ tickerData }) => {

    // const dataList = tickerData.map((tickers, index) => {
    //     const { symbol } = tickers;
    //     return (
    //         <ul key={index}>
    //             <li>{symbol}</li>
    //         </ul>
    //     );
    // });

    // return (
    //     <div>
    //         {dataList}
    //     </div>
    // );

    if (tickerData === null) { return (<div></div>) }
    else {
        return (
            console.log("TICKERDATA" + JSON.stringify(tickerData)),
            <div>
                The ticker symbol is: {JSON.stringify(tickerData.symbol)} and the exchange it is listed on is: {JSON.stringify(tickerData.exchange)}
            </div>
        );
    };
};

const mapSTateToProps = (state) => ({
    tickerData: state.stockApi.tickers
});

export default connect(mapSTateToProps)(StockDisplay);