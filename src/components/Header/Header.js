import React, {Component} from 'react';

class Header extends Component {

    handleChangeInput = (event) => {
        this.props.onChange(event.target.value);
    }
    render() {
        const { filter, population, number } = this.props
        return (
            <div className='container'>
                <div className='input-field col s8'>
                    <input
                        type='text'
                        id='inputCountry'
                        value={filter}
                        placeholder='Digite o país'
                        onChange={this.handleChangeInput}
                    />
                </div>
                <div className='col s4'>
                    <span>Países: {number}  </span>
                    <span>| População: {population}</span>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Header;