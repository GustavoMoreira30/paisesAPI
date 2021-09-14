
import React, { Component } from 'react';

import css from './pais.module.css';

class Pais extends Component {
    render() {
        const { pais } = this.props;
        return (
            <div className={css.content}>
                <img src={pais.flag} className={css.flag} />
                {pais.pt}
            </div>
        );
    }
}

export default Pais;