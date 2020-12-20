import { connect } from "react-redux";
// import { useState } from 'react';
import { activeTicker } from '../redux/actions'
import React from 'react';

const StockList = ({ savedSymbls, activeTicker }) => {

  // const [selectTicker, setselectTicker] = useState(false);

  const setActive = (ticker) => {
    activeTicker(ticker)
  //   if (selectTicker === true) {
  //     setselectTicker(false)
  //   }
  //   else { setselectTicker(true) }
  }

  const symblList = savedSymbls.map((savedSymbl, index) => {
    const { symbl } = savedSymbl;
    return (
      <ul key={index} className="tickerUl">
        <span onClick={()=>{setActive(symbl)}} className="tickerUnselect">{symbl}</span>
      </ul>
    );
  });

  return (
    <div>
      {symblList}
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedSymbls: state.stockTickers.savedSymbls,
  activeSymbls: state.activeTicker.activeSymbls
});

const mapDispatchToProps = dispatch => ({
  activeTicker: (val) => dispatch(activeTicker(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
