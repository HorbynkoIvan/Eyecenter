import React, {Component} from 'react';
import '../../css/components-style/subscribe.css';
import SubscribeForm from '../subscribe/subscribe_components/subscribeForm.react';

class Subscribe extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="subscribe">
                            <h3><span>sub</span>scribe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu risus nulla.
                                In gravida vestibulum nulla, non rutrum odio vestibulum ac.</p>
                            <SubscribeForm/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
;

export default Subscribe;