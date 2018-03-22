import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import '../../css/components-style/goodList.css';
import good1 from "../../../public/img/products/Layer-7.png";
import FlatButton from 'material-ui/FlatButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
    button: {
        width: "305px",
        height: "80px",
        border: "1px solid #a77c5a",
        display: "block",
        margin: "auto"

    },
    labelButton: {
        fontSize: "1.125rem",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    iconStyles: {
        marginRight: "20px"
    }

};


class GoodsList extends Component {

    render() {
        return (
            <div className="goodList">
                <div className="categoryTitle">
                    <span>best</span>sellers
                </div>
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={good1}/>
                            </div>
                            <div className="card-content">
                                <p className="cardTitle">nlnlnl</p>
                                <p className="cardPrice">5555</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={good1}/>
                            </div>
                            <div className="card-content">
                                <p className="cardTitle">nlnlnl</p>
                                <p className="cardPrice">5555</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={good1}/>
                            </div>
                            <div className="card-content">
                                <p className="cardTitle">nlnlnl</p>
                                <p className="cardPrice">5555</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
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
                <div className="row">
                    <FlatButton label="load more"
                                style={styles.button}
                                labelStyle={styles.labelButton}
                                color={red500}
                                icon={ <FontIcon className="material-icons"
                                                 style={styles.iconStyles}
                                                 >label</FontIcon>}
                    />
                </div>
                <div className="categoryTitle">
                    <span>new</span>arrivals
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
                <div className="row">
                    <FlatButton label="load more"
                                style={styles.button}
                                labelStyle={styles.labelButton}
                                color={red500}
                                icon={ <FontIcon className="material-icons"
                                                 style={styles.iconStyles}
                                                 >label</FontIcon>}
                    />
                </div>
            </div>
        )
    }
}
;

export default GoodsList;