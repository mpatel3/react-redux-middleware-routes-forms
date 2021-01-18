import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';

class LanguageSelector extends Component {

    static contextType = LanguageContext;

    constructor() {
        super();
    }

    render() {
        console.log(this.context);
        return (
            <div>
                Select a language
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}></i>
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}></i>
            </div>
        );
    }
}

export default LanguageSelector;