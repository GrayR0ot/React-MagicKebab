import {Component} from "react";
import Step1 from "./components/step1/step1.component";
import Step2 from "./components/step2/step2.component";
import Step3 from "./components/step3/step3.component";
import Step4 from "./components/step4/step4.component";
import Step5 from "./components/step5/step5.component";
import Checkout from "./components/checkout/checkout.component";

const ingredients = {
    breads: [
        {
            name: 'Pain',
            picture: 'assets/bread/bread1.png'
        },
        {
            name: 'Galette',
            picture: 'assets/bread/bread2.png'
        }
    ],
    meets: [
        {
            name: 'Viande',
            picture: 'assets/meet/kebab.png'
        },
        {
            name: 'Tofu',
            picture: 'assets/meet/tofu.png'
        }
    ],
    vegetables: [
        {
            name: 'Salade',
            picture: 'assets/vegetable/salad.png'
        },
        {
            name: 'Tomates',
            picture: 'assets/vegetable/tomato.png'
        },
        {
            name: 'Oignon',
            picture: 'assets/vegetable/onion.png'
        },
    ],
    sauces: [
        {
            name: 'Blanche',
            picture: 'assets/sauce/blanche.png'
        },
        {
            name: 'Harissa',
            picture: 'assets/sauce/harissa.png'
        },
        {
            name: 'Andalouse',
            picture: 'assets/sauce/andalouse.png'
        },
        {
            name: 'BBQ',
            picture: 'assets/sauce/bbq.png'
        },
        {
            name: 'Ketchup',
            picture: 'assets/sauce/ketchup.png'
        },
        {
            name: 'Curry',
            picture: 'assets/sauce/curry.png'
        },
    ],
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            currentKebab: {
                bread: null,
                meet: null,
                vegetables: [],
                sauces: [],
            },
            basket: []
        }
        this.selectBread = this.selectBread.bind(this);
        this.selectMeet = this.selectMeet.bind(this);
        this.selectVegetables = this.selectVegetables.bind(this);
        this.selectSauces = this.selectSauces.bind(this);
        this.addToCard = this.addToCard.bind(this);
    }

    selectBread(bread) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                bread: bread
            },
            currentStep: 2
        }));
    }

    selectMeet(meet) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                meet: meet
            },
            currentStep: 3
        }));
    }

    selectVegetables(vegetable) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                vegetables: [...this.state.currentKebab.vegetables, vegetable]
            },
        }), () => {
            if (this.state.currentKebab.vegetables.length >= 2) {
                this.setState({
                    currentStep: 4
                })
            }
        });
    }

    selectSauces(sauce) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                sauces: [...this.state.currentKebab.sauces, sauce]
            },
        }), () => {
            if (this.state.currentKebab.sauces.length >= 2) {
                this.setState({
                    currentStep: 5
                })
            }
        });
    }

    addToCard() {
        this.setState({
            basket: [...this.state.basket, this.state.currentKebab],
            currentKebab: {
                bread: null,
                meet: null,
                vegetables: [],
                sauces: [],
            },
            currentStep: 1
        });
    }

    renderSwitch() {
        switch (this.state.currentStep) {
            case 1:
                return (<Step1 breads={ingredients.breads} handler={this.selectBread}/>);
            case 2:
                return (<Step2 meets={ingredients.meets} handler={this.selectMeet}/>);
            case 3:
                return (<Step3 vegetables={ingredients.vegetables} handler={this.selectVegetables}/>);
            case 4:
                return (<Step4 sauces={ingredients.sauces} handler={this.selectSauces}/>);
            case 5:
                return (
                    <Step5 ingredients={ingredients} currentKebab={this.state.currentKebab} handler={this.addToCard}/>);
            default:
                break;
        }
    }

    render() {
        return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9">
                            {
                                this.renderSwitch()
                            }
                        </div>
                        <div className="col-md-3">
                            <Checkout ingredients={ingredients} basket={this.state.basket}/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
