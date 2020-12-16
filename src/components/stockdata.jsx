import { connect } from 'react-redux';
// import { useState } from 'react';
import { stockApi } from '../redux/actions'

const stockData = props => {

    const handleStockApi = () => {
        props.stockApi();
    };

    return (
        <div>
            <button onClick={handleStockApi}>Pull Data!</button>
            <ul>{props.stock}</ul>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    stockApi: () => dispatch(stockApi())
});

const mapStateToProps = state => ({
    stock: state.stock
})

export default connect(mapStateToProps, mapDispatchToProps)(stockData);