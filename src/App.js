import React, {Component} from 'react';
import Header from './components/header/header.react';
import Main from './components/Main';

import Footer from './components/footer/footer.react';

const App = () => (
    <div className="body">
        <Header/>
        <Main/>
        <Footer/>
    </div>
);

export default App;
