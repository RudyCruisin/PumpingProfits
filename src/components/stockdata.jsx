import { connect } from 'react-redux';
import { stockApi } from '../redux/actions'

const stockData = props => {

    const ticker = props => <div>{props.symbl}</div>


    const handleStockApi = (symbl) => {
        console.log("IAMTICKER" + ticker)
        props.stockApi(symbl);
    };

    return (
        <div>
            <button onClick={() => handleStockApi()}>Pull Data!</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    stockApi: symbl => dispatch(stockApi(symbl))
});

const mapStateToProps = state => ({
    activeTicker: state.activeTicker
})

export default connect(mapStateToProps, mapDispatchToProps)(stockData);