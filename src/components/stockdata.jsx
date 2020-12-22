import { connect } from 'react-redux';
import { stockApi } from '../redux/actions'

const stockData = props => {

    const handleStockApi = (symbl) => {
        props.stockApi(symbl);
        console.log(symbl)
    };

    return (
        <div>
            <button onClick={() => handleStockApi()}>Pull Data!</button>
            {/* {JSON.stringify(activeTicker.activeSymbl)} */}
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