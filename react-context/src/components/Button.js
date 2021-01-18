import React, { Component } from 'react';
import LanguageContext from '../context/languageContext';
import ColorContext from '../context/ColorContext';

// class Button extends Component {
    
//     static contextType = LanguageContext; 


//     render() {
//         console.info(this.context);
//         const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//         return (
//             <button className="ui button primary">{text}</button>
//         )
//     }
// }

///////////////////// OR ////////////////////////
// Consumer WAy
// if you want to use multiple different context inside of a single component.

class Button extends Component {

    renderButtonText = (value) => {
        return value.language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderButtonText(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        console.info(this.context);
        return(
            <ColorContext.Consumer >
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
            
        )
    }
}



export default Button;