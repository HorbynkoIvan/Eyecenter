import React, {Component} from 'react';
import '../../css/components-style/goodList.css';
import good1 from "../../../public/img/products/Layer-7.png";

class GoodsList extends Component {

    render() {
        return (
            <div className="goodList">
                <div className="categoryTitle">
                    bestsellers
                </div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={good1}/>
                            </div>
                            <div className="card-content">
                                <p className="cardTitle">nlnlnl</p>
                                <p className="cardPrice">5555</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categoryTitle">
                    newarrivals
                </div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src={good1}/>
                            </div>
                            <div className="card-content">
                                <p className="cardTitle">nlnlnl</p>
                                <p className="cardPrice">5555</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default GoodsList;