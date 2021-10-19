import {Component} from "react";
import './step1.css';

class Step1 extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="container background">
                <img src="assets/img.png" className="img-thumbnai"/>
                <div className="col-sm mt-2">
                    <h1 className="text-center mb-4">Pain ou galette ?</h1>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.breads.map((bread, index) => {
                                return (
                                    <div key={index} className="col-sm-5">
                                        <button onClick={() => this.props.handler(index)} className="container border border-3 border-gray selectable rounded">
                                            <img src={bread.picture}/>
                                            <p>{bread.name}</p>
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

export default Step1;