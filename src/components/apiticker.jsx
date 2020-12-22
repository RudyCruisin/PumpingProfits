import { connect } from 'react-redux';
import React, {Component} from 'react';

class ApiState extends Component {

    createApiTicker() {
        return (this.props.apiticker)
    }

    render() {
        return (
            <div>
            Hello World
                {this.createApiTicker()}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        apiticker: state.activeTicker
    };
}

export default connect(mapStateToProps)(ApiState);