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
        },
        {
            name: 'Baguette',
            picture: 'assets/bread/bread3.png'
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
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.selectBread = this.selectBread.bind(this);
        this.selectMeet = this.selectMeet.bind(this);
        this.selectVegetables = this.selectVegetables.bind(this);
        this.selectSauces = this.selectSauces.bind(this);
        this.addToCard = this.addToCard.bind(this);
    }

    previous() {
        if (this.state.currentStep > 1) {
            this.setState({currentStep: this.state.currentStep - 1})
        }
    }

    next() {
        if (this.state.currentStep < 5) {
            this.setState({currentStep: this.state.currentStep + 1})
        }
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
        if(this.state.currentKebab.vegetables.includes(vegetable)) {
            this.setState(prevState => ({
                currentKebab: {
                    ...prevState.currentKebab,
                    vegetables: this.state.currentKebab.vegetables.filter(item => item !== vegetable)
                },
            }));
        } else {
            if(this.state.currentKebab.vegetables.length <= 2) {
                this.setState(prevState => ({
                    currentKebab: {
                        ...prevState.currentKebab,
                        vegetables: [...this.state.currentKebab.vegetables, vegetable]
                    },
                }));
            }
        }
    }

    selectSauces(sauce) {
        if(this.state.currentKebab.sauces.includes(sauce)) {
            this.setState(prevState => ({
                currentKebab: {
                    ...prevState.currentKebab,
                    sauces: this.state.currentKebab.sauces.filter(item => item !== sauce)
                },
            }));
        } else {
            if(this.state.currentKebab.sauces.length < 2) {
                this.setState(prevState => ({
                    currentKebab: {
                        ...prevState.currentKebab,
                        sauces: [...this.state.currentKebab.sauces, sauce]
                    },
                }));
            }
        }
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
                return (<Step1 currentKebab={this.state.currentKebab} breads={ingredients.breads} handler={this.selectBread} next={this.next}/>);
            case 2:
                return (<Step2 currentKebab={this.state.currentKebab} meets={ingredients.meets} handler={this.selectMeet} previous={this.previous}
                               next={this.next}/>);
            case 3:
                return (
                    <Step3 currentKebab={this.state.currentKebab} vegetables={ingredients.vegetables} handler={this.selectVegetables} previous={this.previous}
                           next={this.next}/>);
            case 4:
                return (<Step4 currentKebab={this.state.currentKebab} sauces={ingredients.sauces} handler={this.selectSauces} previous={this.previous}
                               next={this.next}/>);
            case 5:
                return (
                    <Step5 currentKebab={this.state.currentKebab} ingredients={ingredients} handler={this.addToCard}
                           previous={this.previous}/>);
            default:
                break;
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">

                        <div className="container">
                            <img alt="logo" src="assets/img.png" className="img-thumbnai"/>
                            <div className="row mt-2">
                                {
                                    this.renderSwitch()
                                }
                            </div>
                        </div>
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
