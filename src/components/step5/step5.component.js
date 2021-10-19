import {Component, Fragment} from "react";
import './step5.css';


class Step5 extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-4">On récapitule</h1>
                <div className="row justify-content-center align-self-center">
                    <div className="col-sm-5">
                        <button className="container border border-3 border-gray rounded">
                            <img alt={this.props.ingredients.breads[this.props.currentKebab.bread].name}
                                 src={this.props.ingredients.breads[this.props.currentKebab.bread].picture}/>
                            <p>{this.props.ingredients.breads[this.props.currentKebab.bread].name}</p>
                        </button>
                    </div>
                    <div className="col-sm-5">
                        <button className="container border border-3 border-gray rounded">
                            <img alt={this.props.ingredients.meets[this.props.currentKebab.meet].name}
                                 src={this.props.ingredients.meets[this.props.currentKebab.meet].picture}/>
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
                                        <img
                                            alt={this.props.ingredients.vegetables[item].name}
                                            src={this.props.ingredients.vegetables[item].picture}/>
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
                                        <img alt={this.props.ingredients.sauces[item].name}
                                             src={this.props.ingredients.sauces[item].picture}/>
                                        <p>{this.props.ingredients.sauces[item].name}</p>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-2">
                            <button className="btn btn-info"
                                    onClick={() => this.props.previous()}>Précédent
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-warning"
                                    onClick={() => this.props.handler()}>Commander
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Step5;