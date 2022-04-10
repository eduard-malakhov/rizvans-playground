import React, { FunctionComponent } from 'react';
import './styles.less';
import BackgroundImage from './assets/images/background.png';


const Newsletter: FunctionComponent = () => {
    return (
        <div className='newsletter'>
            <img className='background' src={ BackgroundImage } />
            <div className='content'> 
                <h1>Newsletter</h1>
                <p>
                    Ut arcu arcu, faucibus eu risus blandit, pulvinar viverra justo. Phasellus arcu justo,<br />
                    ullamcorper non diam sit amet, luctus condimentum metus
                </p>
                <form>
                    <input type="email" placeholder="email adress"></input>
                    <div className='sign-up' role="button">Sign up</div>
                </form>
            </div>
        </div>
    )
}

export {
    Newsletter,
}
