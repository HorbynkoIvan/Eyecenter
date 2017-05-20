import React, {Component} from 'react';
import Header from './components/header/header.react';
import Showcase from './components/header/showcase.react';
import Specoffers from './components/content/specoffers.react';
import Footer from './components/footer/footer.react';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <Showcase/>
                    <Specoffers/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
