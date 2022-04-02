import React, { FunctionComponent } from 'react';
import { Logo } from './logo';
import { Menu } from './menu';

import './styles.less';

const Header: FunctionComponent = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Logo />
                <div className="spacing"></div>
                <Menu />
            </div>
        </div>
    )
}

export {
    Header,
}