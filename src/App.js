import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/header.react';
import Showcase from './components/header/showcase.react';
import Specoffers from './components/content/specoffers.react';
import Footer from './components/footer/footer.react';
import GoodsList from './components/content/goodsList';
import GridList from './matuicomp/gridList';

const App = () => (
        <div>
            <Header/>
            <main className="container">
                <Specoffers/>
                <GoodsList/>
            </main>
            <Footer/>
        </div>
);

export default App;
