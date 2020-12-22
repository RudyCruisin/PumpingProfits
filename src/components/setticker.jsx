import { connect } from 'react-redux';

const SetTicker = ({activeTicker}) => {

    console.log(activeTicker)

    return (
        <div>
            {(activeTicker.activeSymbl)}
        </div>
    )

}

const mapSTateToProps = (state) => ({
    activeTicker: state.activeTicker
});

export default connect(mapSTateToProps)(SetTicker);