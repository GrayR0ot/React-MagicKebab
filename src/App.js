import './App.css';
import {Component} from "react";
import Step1 from "./components/step1/step1.component";
import Step2 from "./components/step2/step2.component";
import Step3 from "./components/step3/step3.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            currentKebab: {
                breed: null,
                meet: null,
                vegetable: []
            }
        }
        this.selectBreed = this.selectBreed.bind(this);
        this.selectMeet = this.selectMeet.bind(this);
        this.selectVegetables = this.selectVegetables.bind(this);
    }

    selectBreed(breed) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                breed: breed
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
        this.setState({
            currentKebab: {
                vegetable: [...this.state.currentKebab.vegetable, vegetable]
            }
        });
        if(this.state.currentKebab.vegetable.length >= 2) {
            this.setState({
                currentStep: 4
            })
        }
    }

    renderSwitch() {
        switch (this.state.currentStep) {
            case 1:
                return (<Step1 handler={this.selectBreed}/>);
            case 2:
                return (<Step2 handler={this.selectMeet}/>);
            case 3:
                return (<Step3 handler={this.selectVegetables}/>);
            default:
                break;
        }
    }

    render() {
        return (
            <div className="App">
                {
                    this.renderSwitch()
                }
            </div>
        );
    }
}

export default App;
