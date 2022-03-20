import React, { Fragment, FunctionComponent } from 'react';
import './Application.less';
import { Logo } from './logo';
import { Menu } from './menu';

const MenuBar: FunctionComponent = () => {
    return (
        <Fragment>
            <div className='menu-bar'>
                <Logo />

                <Menu />
            </div>

            {/* <a href="//yandex.ru">Test link</a> */}
            
            {/* <img src='https://yastatic.net/s3/home/services/block/music_new.svg' /> */}
        </Fragment>
   );
}

const Footer: FunctionComponent = () => {
    return (
        <div className='footer'>
            Copyright
        </div>
    );
}

const Application: FunctionComponent = () => {
    return (
        <div className='application'>
            <MenuBar />

            {/* <Footer /> */}
        </div>
    );
}

export {
    Application,
}