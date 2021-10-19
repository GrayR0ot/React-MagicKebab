import {Component} from "react";
import './step2.css';

class Step2 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <div className="row mt-2">
                    <h1 className="text-center mb-4">Plutôt viande ou tofu ?</h1>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.meets.map((meet, index) => {
                                return (
                                    <div key={index} className="col-sm-5">
                                        <button onClick={() => this.props.handler(index)} className="container border border-3 border-gray selectable rounded">
                                            <img src={meet.picture}/>
                                            <p>{meet.name}</p>
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

export default Step2;