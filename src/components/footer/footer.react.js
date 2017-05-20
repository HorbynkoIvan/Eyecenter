import React, {Component} from 'react';
import '../../css/components-style/footer.css';
import '../../css/components-style/style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l3 offset-l2 s12">
                            <h5>Brands</h5>
                            <ul>
                                <li><a href="#!">Adidas</a></li>
                                <li><a href="#!">Alexander McQueen</a></li>
                                <li><a href="#!">Boss</a></li>
                                <li><a href="#!">Boss Orange</a></li>
                                <li><a href="#!">Bottega Veneta</a></li>
                                <li><a href="#!">Carrera</a></li>
                                <li><a href="#!">Cocoons</a></li>
                                <li><a href="#!">Dior</a></li>
                                <li><a href="#!">Dior Homme</a></li>
                                <li><a href="#!">Hugo Boss</a></li>
                                <li><a href="#!">Marc by Marc Jacobs</a></li>
                                <li><a href="#!">Marc Jacobs</a></li>
                                <li><a href="#!">Max Mara</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5>Brands</h5>
                            <ul>
                                <li><a href="#!">MAX & Co.</a></li>
                                <li><a href="#!">Montana</a></li>
                                <li><a href="#!">Oakley</a></li>
                                <li><a href="#!">Oxydo</a></li>
                                <li><a href="#!">Persol</a></li>
                                <li><a href="#!">Pierre Cardin</a></li>
                                <li><a href="#!">Ray-Ban</a></li>
                                <li><a href="#!">Ray-Ban Junior</a></li>
                                <li><a href="#!">Seventh Street</a></li>
                                <li><a href="#!">Sillhouette</a></li>
                                <li><a href="#!">Smith Optics</a></li>
                                <li><a href="#!">Tommy Hilfiger</a></li>
                                <li><a href="#!">Zoo Collection</a></li>
                            </ul>
                        </div>
                        <div className="col l3 s12">
                            <h5>Other<span>info</span></h5>
                            <ul>
                                <li><a href="#!">Terms and conditions</a></li>
                                <li><a href="#!">Privacy policy</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">FAQ</a></li>
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