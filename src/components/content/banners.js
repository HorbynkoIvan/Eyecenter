import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import '../../css/components-style/banners.css';
import banner1 from "../../../public/img/banners/Layer-16-copy.jpg";
import banner2 from "../../../public/img/banners/Layer-18.jpg";



class Banners extends Component {
    render() {
        return (
            <div className="bannersList">
                <div className="bannersTitle">
                    <span>bra</span>nds
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={banner1}/>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={banner2}/>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={banner1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default Banners;