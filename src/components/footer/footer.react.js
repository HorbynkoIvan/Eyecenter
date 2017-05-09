import React, {Component} from 'react';
import '../../css/components-style/footer.css';
import '../../css/components-style/style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5>Footer Content</h5>
                            <p>You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5>Links</h5>
                            <ul>
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                <div className="container">
                    <div className="divider"></div>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">
                                <img src="./../../../logo.png" alt="logo"/>
                            </a>
                            <a href="#" className="footer-logo right">
                                <img src="./../../../img/trustpilot.png" alt="trustpilot"/>
                            </a>
                            <a href="#" className="footer-logo right">
                                <img src="./../../../img/prisgaranti.png" alt="prisgaranti"/>
                            </a>
                        </div>
                    </nav>


                </div>
            </footer>
        )
    }
}
;

export default Footer;