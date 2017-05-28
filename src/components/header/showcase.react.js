import React, {Component} from 'react';
import '../../css/components-style/showcase.css';
import '../../css/components-style/style.css';
import '../../css/components-style/style.css';
import menglasses from "../../../public/img/menglasses.png";
import womenglasses from "../../../public/img/womenglasses.png";

class Showcase extends Component {

    render() {
        return (
            <div className="showcase">
                <div className="row">
                    <div className="col s12 m6">
                        <p>women</p>
                        <img className="responsive-img" src={womenglasses} alt="womenglasses"/>
                        <div className="womenglasses-type">
                            <p className="dioptric">dioptric</p>
                            <p className="sunglassses">sunglasses</p>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <p>men</p>
                        <img className="responsive-img" src={menglasses} alt="menglasses"/>
                        <div className="menglasses-type">
                            <p className="dioptric">dioptric</p>
                            <p className="sunglassses">sunglasses</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default Showcase;