import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        // this.onInputChange = this.onInputChange.bind(this); if you want to use OnInputChnage as normal function instead
        // of arrow function.
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    {/* when we use value = this.state.term it makes input filed as kind of controlled file
                        we make sure that Value of the input will be controlled by component. 
                        when a state changes then only then the value in the input compoent will be going to change.
                    */}
                    <input
                        placeholder="Get a 5 days forecase in your favorites city within India"
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);