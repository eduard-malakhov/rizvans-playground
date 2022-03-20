import React, { Fragment, FunctionComponent } from 'react';
import './Application.less';

const Header: FunctionComponent = () => {
    return (
        <Fragment>
            <div className='header'>
                Hello, Rizvan!
            </div>
            
            <img src='https://yastatic.net/s3/home/services/block/music_new.svg' />
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
            <Header />

            <Footer />
        </div>
    );
}

export {
    Application,
}