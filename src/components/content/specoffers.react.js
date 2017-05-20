import React, {Component} from 'react';
import '../../css/components-style/specoffers.css';
import '../../css/components-style/style.css';
import saturation1 from "../../../public/img/saturation1.jpg";
import saturation2 from "../../../public/img/saturation2.jpg";
import shipping from "../../../public/img/shipping.png";
import returning from "../../../public/img/return.png";

class Showcase extends Component {

    render() {
        return (
            <div className="row specoffers">
                <div className="col s12 m7">
                    <img className="responsive-img" src={saturation1} alt="saturation1"/>
                    <div className="service">
                        <div className="service-shipping">
                            <img src={shipping} alt="shipping"/>
                        </div>
                        <div className="service-return">
                            <img src={returning} alt="returning"/>
                        </div>
                    </div>
                </div>
                <div className="col s12 m5">
                    <img className="responsive-img" src={saturation2} alt="saturation2"/>
                </div>
                

            </div>
        )
    }
}
;

export default Showcase;