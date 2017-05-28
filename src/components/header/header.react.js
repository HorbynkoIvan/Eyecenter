import React, {Component} from 'react';
import $ from 'jquery';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';
import Showcase from './showcase.react';
/*import DropDownMenu from 'material-ui/DropDownMenu';*/
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $(".button-collapse").sideNav().bind(this);
        });
    }

    render() {
        return (
            <header>
                <nav className="container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">
                            <img src="./../../../logo.png" alt="logo"/>
                        </a>

                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i
                            className="material-icons">menu</i></a>

                        <ul className="right hide-on-med-and-down">
                            <li><a href="#"><i className="material-icons">search</i></a></li>
                            <li><a href="#"><i className="material-icons left">shopping_cart</i>CART</a></li>
                        </ul>

                        <ul className="menu-center right hide-on-med-and-down">
                            <li><a href="#">dioptric glasses</a></li>
                            <li><a href="#">sunglasses</a></li>
                            <li><a href="#">kids glasses</a></li>
                        </ul>

                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">Javascript</a></li>
                            <li><a href="mobile.html">Mobile</a></li>
                        </ul>
                    </div>
                </nav>
                <Showcase/>
            </header>
        )
    }
}
;

export default Header;