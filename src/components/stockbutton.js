import React from 'react';

const StockButton = (props) => {

    return (
        <span>
            {props}
        </span>
        // <span onClick={setActive} className={selectTicker ? 'tickerSelect' : 'tickerUnselect'}>{symbl}</span>
    );
};

export default StockButton;