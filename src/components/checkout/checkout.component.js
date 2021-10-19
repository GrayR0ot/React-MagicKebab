import {Component, Fragment} from "react";
import './checkout.css';

class Checkout extends Component {

    render() {
        return (
            <div className="container background">
                <div className="col-sm mt-2">
                    <div className="row justify-content-center align-self-center">
                        <h4 className="text-center mb-4">Total: 11€00</h4>
                        <button className="btn btn-warning">Passer la commande</button>
                        <h3>Votre commande</h3>
                        {
                            this.props.basket.map((item, index) => {
                                return (
                                    <div key={index} className="border border-warning border-2 rounded">
                                        <p>🥙 { this.props.ingredients.breads[item.bread].name }</p>
                                        <p>🍖 { this.props.ingredients.meets[item.meet].name }</p>
                                        <p>🍅
                                        {
                                            item.vegetables.map((vegetable, index) => {
                                                return (
                                                    <Fragment key={index}> { this.props.ingredients.vegetables[vegetable].name }{ index<item.vegetables.length-1 ? ' - ' : ''}</Fragment>
                                                )
                                            })
                                        }
                                        </p>
                                        <p>🍛
                                        {
                                            item.sauces.map((sauce, index) => {
                                                return (
                                                    <Fragment key={index}> { this.props.ingredients.sauces[sauce].name }{ index<item.sauces.length-1 ? ' - ' : ''}</Fragment>
                                                )
                                            })
                                        }
                                        </p>
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

export default Checkout;