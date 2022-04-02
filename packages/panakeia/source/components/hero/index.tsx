import React, { FunctionComponent } from 'react';

import './styles.less';

import BackgroundImage from './assets/images/background.png';

import Dish1 from './assets/images/dish-1.jpg';
import Dish2 from './assets/images/dish-2.jpg';
import Dish3 from './assets/images/dish-3.jpg';

interface ItemProperties {
    imageUrl: string;
    header: string;
    text: string;
}

const Item: FunctionComponent<ItemProperties> = (properties: ItemProperties) => {
    return (
        <div className='item'>
            <img src={ properties.imageUrl } />
            <h1>{ properties.header }</h1>
            <p>{ properties.text }</p>
        </div>
    )
};

const Hero: FunctionComponent = () => {
    return (
        <div className='hero'>
            <img className='background' src={ BackgroundImage } />
            <div className='content'>
                <h1>Integer at tortor ut magna</h1>
                <h2>finibus lobortis sed quis tellus.</h2>
                <div className='items'>
                    <Item 
                        imageUrl={ Dish1 }
                        header="Tincidunt"
                        text="Phasellus arcu justo, ullamcorper non diam sit amet, luctus condimentum metus. Nullam tempus egestas efficitur. Sed quam dolor."
                    />
                    <Item 
                        imageUrl={ Dish2 }
                        header="Duis bibendum"
                        text="Ut arcu arcu, faucibus eu risus blandit, pulvinar viverra justo. Phasellus arcu justo, ullamcorper non diam sit amet, luctus condimentum metus. In hac habitasse platea dictumst."
                    />
                    <Item 
                        imageUrl={ Dish3 }
                        header="Donec ligula"
                        text="Nullam tempus egestas efficitur. Sed quam dolor, vulputate sed mattis et, sodales quis orci. Ut arcu arcu, faucibus eu risus blandit."
                    />
                </div>
                <div className='button'>
                    Read more
                </div>
            </div>
        </div>
    )
}

export {
    Hero,
}