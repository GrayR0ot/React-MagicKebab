import {Component} from "react";
import './step2.css';

class Step1 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <b className="choiseTitle">Plutôt viande ou tofu ?</b>
                <div className="margin"/>
                <div className="row">
                    <div className="col-sm">
                        <button className="container border border-3 border-gray selectable rounded" onClick={() => this.props.handler(1)}>
                                <img src="assets/kebab.png"/>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="container border border-3 border-gray selectable rounded" onClick={() => this.props.handler(2)}>
                            <img src="assets/tofu.png"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }


}

export default Step1;