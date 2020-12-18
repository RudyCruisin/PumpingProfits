import { connect } from "react-redux";

const StockList = ({ savedSymbls }) => {

  const symblList = savedSymbls.map((savedSymbl, index) => {
    const { symbl } = savedSymbl;
    return (
      <ul key={index}>
        <span onClick={console.log("hello")} className="tickerSelect">{symbl}</span>
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
});

export default connect(mapStateToProps)(StockList);
