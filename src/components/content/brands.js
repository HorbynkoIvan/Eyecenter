import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import '../../css/components-style/brandsList.css';
import brand1 from "../../../public/img/brands/Layer-11.png";
import brand2 from "../../../public/img/brands/Layer-12.png";
import brand3 from "../../../public/img/brands/Layer-14.png";
import brand4 from "../../../public/img/brands/Layer-15.png";


class Brands extends Component {
    render() {
        return (
            <div className="brandsList">
                <div className="brandsTitle">
                    <span>bra</span>nds
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m3">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={brand1}/>
                                </div>
                            </div>
                            <div className="card-content">
                                <p>345 products</p>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={brand2}/>
                                </div>
                            </div>
                            <div className="card-content">
                                <p>231 products</p>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={brand3}/>
                                </div>
                            </div>
                            <div className="card-content">
                                <p>172 products</p>
                            </div>
                        </div>
                        <div className="col s12 m3">
                            <div className="card-panel">
                                <div className="card-image">
                                    <img src={brand4}/>
                                </div>
                            </div>
                            <div className="card-content">
                                <p>112 products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default Brands;