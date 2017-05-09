import React, {Component} from 'react';
import Header from './components/header/header.react';
import Showcase from './components/header/showcase.react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Showcase/>
            </div>
        );
    }
}

export default App;
