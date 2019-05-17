import React, { Component } from 'react';
import Display from './components/Display';
import ButtonBlock from './components/ButtonBlock';

import 'bootstrap/dist/css/bootstrap.css';

/* eslint no-eval: 0 */

class App extends Component {
    state = {
        result: 0,
        formula: '',
        error: false
    }

    exclude = ['*', '/', '-', '+', '.'];

    calculate = () => {
        if(!this.state.formula)
            return;

        // validate
        let error = false;
        const parts = this.state.formula.split(/[-+*]/);
        parts.map(item => {
            if(item.slice(-2) === '/0') {
                error = true;
            }
            return item;
        });

        if(error) {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                result: eval(this.state.formula),
                formula: ''
            })
        }
    }

    generateFormula = element => {
        const prev_element = this.state.formula[(this.state.formula.length - 1)];

        if((this.state.formula.length < 1 || this.exclude.indexOf(prev_element) !== -1) && this.exclude.indexOf(element) !== -1)
            return;


        if(!this.validate(element))
            return;

        this.setState({
            formula: this.state.formula + element,
            error: false
        });
    }

    validate = (element) => {
        const parts = this.state.formula.split(/[-+/*]/);
        let current = parts[parts.length - 1];

        let status = true;
        // leading null is an error except float numbers
        if(current[0] === '0' && element !== '.' && current.length === 1)
            status = false;

        return status;
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Display result={this.state.result} formula={this.state.formula} error={this.state.error} />
                        <ButtonBlock calculate={this.calculate} formula={(i) => this.generateFormula(i)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
