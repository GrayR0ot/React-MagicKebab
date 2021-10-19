import {Component} from "react";
import './step3.css';

class Step3 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <div className="row mt-2">
                    <h1 className="text-center mb-4">Salade, tomates, oignons ?</h1>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.vegetables.map((vegetable, index) => {
                                return (
                                    <div key={index} className="col-sm-4">
                                        <button onClick={() => this.props.handler(index)} className="container border border-3 border-gray selectable rounded">
                                            <img src={vegetable.picture}/>
                                            <p>{vegetable.name}</p>
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

export default Step3;