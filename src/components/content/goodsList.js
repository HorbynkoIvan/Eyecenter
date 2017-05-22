import React, {Component} from 'react';
import '../../css/components-style/specoffers.css';
import good1 from "../../../public/img/products/Layer 7.png";

class GoodsList extends Component {

    render() {
        return (
            <div className="row specoffers">
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={good1}/>
                        </div>
                        <div className="card-content white-text">
                            <p>nlnlnl</p>
                            <p>5555</p>
                        </div>
                    </div>
                </div><div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={good1}/>
                        </div>
                        <div className="card-content white-text">
                            <p>nlnlnl</p>
                            <p>5555</p>
                        </div>
                    </div>
                </div><div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={good1}/>
                        </div>
                        <div className="card-content white-text">
                            <p>nlnlnl</p>
                            <p>5555</p>
                        </div>
                    </div>
                </div><div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={good1}/>
                        </div>
                        <div className="card-content white-text">
                            <p>nlnlnl</p>
                            <p>5555</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <img src={good1}/>
                        </div>
                        <div className="card-content white-text">
                            <p>nlnlnl</p>
                            <p>5555</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
;

export default GoodsList;