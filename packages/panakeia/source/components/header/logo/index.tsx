import React, { FunctionComponent } from 'react';

import './styles.less';

import LogoImage from './assets/images/logo.png';

const Logo: FunctionComponent = () => {
    return (
        <div className='logo'>
            <img src={ LogoImage }/>
        </div>
    )
}

export {
    Logo,
}