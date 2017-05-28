import React, {Component} from 'react';
import '../../css/components-style/specoffers.css';
import '../../css/components-style/style.css';
import saturation1 from "../../../public/img/saturation1.jpg";
import saturation2 from "../../../public/img/saturation2.jpg";
import shipping from "../../../public/img/shipping.png";
import returning from "../../../public/img/return.png";

/*console.log(document.getElementsByClassName("saturation2"));*/

/*window.onload = function () {
    console.log("height")
    console.log(document.getElementsByClassName("saturation2").img.naturalHeight);
};*/

class Specoffers extends Component {
    render() {
        return (
            <div className="row specoffers">
                <div className="col s12 m7 aaa">
                    <img className="responsive-img" src={saturation1} alt="saturation1"/>
                    <div className="service">
                        {/*ToDo align block "service" on baseline*/}
                        <div className="service-shipping">
                            <img src={shipping} alt="shipping"/>
                            <p className="service-shipping__free">free shipping</p>
                            <p className="service-shipping__worldwide">worldwide</p>
                        </div>
                        <div className="service-return">
                            <img src={returning} alt="returning"/>
                            <p className="service-return__free">14 days free return</p>
                            <p className="service-return__worldwide">worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m5">
                    <img className="responsive-img saturation2" src={saturation2} alt="saturation2"/>
                </div>
            </div>
        )
    }
}
;

export default Specoffers;