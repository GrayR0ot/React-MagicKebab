import {Component} from "react";
import './step3.css';

class Step1 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <b className="choiseTitle">Salade, Tomates, oignons ?</b>
                <div className="margin"/>
                <div className="row">
                    <div className="col-sm">
                        <button className="container border border-3 border-gray selectable rounded" onClick={() => this.props.handler('salad')}>
                                <img src="assets/salad.png"/>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="container border border-3 border-gray selectable rounded" onClick={() => this.props.handler('tomato')}>
                            <img src="assets/tomato.png"/>
                        </button>
                    </div>
                    <div className="col-sm">
                        <button className="container border border-3 border-gray selectable rounded" onClick={() => this.props.handler('onion')}>
                            <img src="assets/onion.png"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }


}

export default Step1;