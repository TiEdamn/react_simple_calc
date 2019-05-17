import React, {Component} from 'react';
import Button from '../Button';

class ButtonBlock extends Component {
    renderBtn(i) {
        const element = (i === '=' ? <Button element={i} onClick={this.props.calculate} /> : <Button element={i} onClick={() => this.props.formula(i)} />);

        return element
    }

    render () {
        return (
            <div className="text-center row">
                {this.renderBtn('7')}
                {this.renderBtn('8')}
                {this.renderBtn('9')}
                {this.renderBtn('*')}

                {this.renderBtn('4')}
                {this.renderBtn('5')}
                {this.renderBtn('6')}
                {this.renderBtn('-')}

                {this.renderBtn('1')}
                {this.renderBtn('2')}
                {this.renderBtn('3')}
                {this.renderBtn('+')}

                {this.renderBtn('.')}
                {this.renderBtn('0')}
                {this.renderBtn('/')}
                {this.renderBtn('=')}
            </div>
        )
    }
}

export default ButtonBlock