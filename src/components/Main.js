import React, {Component} from 'react';
import Specoffers from '../components/content/specoffers.react';
import GoodsList from '../components/content/goodsList';
import BrandsList from '../components/content/brands';
import Banners from '../components/content/banners';
import Subscribe from '../components/subscribe/subscribe.react';
import '../css/components-style/style.css';

const Main = () => (
        <main>
            <div className="container">
                <Specoffers/>
                <GoodsList/>
            </div>
            <BrandsList/>
            <Banners/>
            <Subscribe/>
        </main>
);

export default Main;
