import React, { Component } from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../context/languageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

// userCreate needs some info from context object.
// value is special property to the provider.
class App extends Component {
    // state = { language: 'english'};
    
    // onLanguageChange = (language) => {
    //     this.setState({ language });
    // }
    
    render() {
        return (
            <div className="ui container">
                
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
                
                {/* <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider> */}

                
                {/* <LanguageContext.Provider value="dutch">
                    <UserCreate />
                </LanguageContext.Provider> */}


                {/* this UserCreate component will get the language value from the default value as 
                we have not passed any Provider  */}
                
                {/* <UserCreate /> */}

            </div>
        )
    }
}

export default App;