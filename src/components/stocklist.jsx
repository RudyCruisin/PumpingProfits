import { connect } from "react-redux";

const StockList = ({ savedSymbls }) => {

  const symblList = savedSymbls.map((savedSymbl, index) => {
    const { symbl } = savedSymbl;
    return (
      <ul key={index}>
        <li><a>{symbl}</a></li>
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
