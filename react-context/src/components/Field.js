import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';

class Field extends Component {
    // this is how we hookup context object to the class component. 
    // contextType is a special property, have to use contextType property keyword only.
    // static adds property to class itself.
    static contextType = LanguageContext;
    // OR
    // Button.contextType = LanguageContext;
    
    
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;