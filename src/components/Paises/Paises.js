import React, { Component } from 'react';
import Pais from ".Pais/";
import css from './paises.module.css';

class Paises extends Component {
    render() {
        const { paises } = this.props;
        return (
            <div className={css.boxContent}>
                <ul className={css.ulContainer}>
                    {paises.map(pais => {
                        return (
                            <li className={css.liContainer}>
                                <Pais pais={pais} key={pais.id} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Paises;