import { connect } from 'react-redux';
import { useState } from 'react';
import { saveTickers } from '../redux/actions';

const Stocksearch = props => {

    const [symbl, setSymbl] = useState('');

    const matchTicker = () => {

    }

    const handleChange = e => {
        setSymbl(e.target.value)
    }

    const handleSubmit = () => {
        props.saveTickers(symbl);
        // setSymbl('');
    }

    return (

        <div>
            <img src={'/pump.png'} alt = {"pumping profits logo"}></img>
            <input
                type="text"
                name="stockTicker"
                // value="test"
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