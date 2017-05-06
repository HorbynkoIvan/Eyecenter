import React, {Component} from 'react';
import '../../css/components-style/header.css';
import '../../css/components-style/style.css';
import '../../css/fonts.css';
/*import DropDownMenu from 'material-ui/DropDownMenu';*/
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}
;

export default Header;