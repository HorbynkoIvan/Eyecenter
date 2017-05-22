import React, {Component} from 'react';
import Header from './components/header/header.react';
import Showcase from './components/header/showcase.react';
import Specoffers from './components/content/specoffers.react';
import Footer from './components/footer/footer.react';
import GoodsList from './components/content/goodsList';
import GridList from './matuicomp/gridList';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Header/>
                    <Showcase/>
                    <Specoffers/>
                    <GoodsList/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
