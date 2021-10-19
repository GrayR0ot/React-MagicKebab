import {Component} from "react";
import './step4.css';

class Step4 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <div className="row mt-2">
                    <h1 className="text-center mb-4">Quelques sauces ?</h1>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.sauces.map((sauce, index) => {
                                return (
                                    <div key={index} className="col-sm-4">
                                        <button onClick={() => this.props.handler(index)} className="container border border-3 border-gray selectable rounded">
                                            <img src={sauce.picture}/>
                                            <p>{sauce.name}</p>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default Step4;