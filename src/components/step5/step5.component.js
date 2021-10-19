import {Component} from "react";
import './step5.css';



class Step5 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <img src="assets/img.png" className="img-thumbnai"/>
                <div className="row mt-2">
                    <h1 className="text-center mb-4">On récapitule</h1>
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-5">
                            <button className="container border border-3 border-gray rounded">
                                <img src={this.props.ingredients.breads[this.props.currentKebab.bread].picture}/>
                                <p>{this.props.ingredients.breads[this.props.currentKebab.bread].name}</p>
                            </button>
                        </div>
                        <div className="col-sm-5">
                            <button className="container border border-3 border-gray rounded">
                                <img src={this.props.ingredients.meets[1].picture}/>
                                <p>{this.props.ingredients.meets[this.props.currentKebab.meet].name}</p>
                            </button>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.currentKebab.vegetables.map((item, index) => {
                                return (
                                    <div key={index} className="col-sm-5">
                                        <button className="container border border-3 border-gray rounded">
                                            <img src={this.props.ingredients.vegetables[item].picture}/>
                                            <p>{this.props.ingredients.vegetables[item].name}</p>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br/>
                    <div className="row justify-content-center align-self-center">
                        {
                            this.props.currentKebab.sauces.map((item, index) => {
                                return (
                                    <div key={index} className="col-sm-5">
                                        <button className="container border border-3 border-gray rounded">
                                            <img src={this.props.ingredients.sauces[item].picture}/>
                                            <p>{this.props.ingredients.sauces[item].name}</p>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="container mt-4">
                        <button className="btn btn-warning" onClick={() => this.props.handler()}>Commander</button>
                    </div>
                </div>
            </div>

        );
    }


}

export default Step5;