import React, {Component} from 'react';
import '../../css/components-style/showcase.css';
import '../../css/components-style/style.css';
import '../../css/components-style/style.css';
import menglasses from "../../../public/img/menglasses.png";
import womenglasses from "../../../public/img/womenglasses.png";

class Showcase extends Component {

    render() {
        return (
            <div className="row showcase">
                <div className="col s12 m6">
                    <p>women</p>
                    <img className="responsive-img" src={womenglasses} alt="womenglasses"/>
                </div>
                <div className="col s12 m6">
                    <p>men</p>
                    <img className="responsive-img" src={menglasses} alt="menglasses"/>
                </div>
            </div>
        )
    }
}
;

export default Showcase;