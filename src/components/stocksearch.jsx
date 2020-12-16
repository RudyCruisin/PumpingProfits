import { connect } from 'react-redux';
import { useState } from 'react';
import { saveTickers } from '../redux/actions';
import React from 'react';

const Stocksearch = (props) => {

    const [symbl, setSymbl] = useState('');

    // const matchTicker = () => {
    //     const url = 'https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_4fc5d3b61472414c8d99930c0ccbffe6';
    //     fetch(url)
    //         .then(response => response.json())
    // }

    const handleChange = (e) => {
        setSymbl(e.target.value)
    }

    const handleSubmit = () => {
        props.saveTickers(symbl);
        // setSymbl('');
    }

    return (

        <div>
            <input
                type="text"
                name="stockTicker"
                onChange={handleChange}

            />
            <button onClick={handleSubmit}>Enter</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    saveTickers: (val) => dispatch(saveTickers(val))
});

// const mapStateToProps = state => ({
// })

export default connect(null, mapDispatchToProps)(Stocksearch);