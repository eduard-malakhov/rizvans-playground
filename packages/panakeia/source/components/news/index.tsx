import React, { FunctionComponent } from 'react';
import './styles.less';
import image1 from './assets/images/image1.png';
import image2 from './assets/images/image2.png';
import image3 from './assets/images/image3.png';

interface ItemProperties {
    imageUrl: string;
    header: string;
    text: string;
}

const Item: FunctionComponent<ItemProperties> = (properties: ItemProperties) => {
    return (
        <div className='item'>
            <div className='upper'> 
                <img src={ properties.imageUrl } />
                <h1>{ properties.header }</h1>
                <p>{ properties.text }</p>
            </div>
            <div className='lower'>
                <div className='button'>
                        Read more
                </div>
            </div>
        </div>

    )
};

const News: FunctionComponent = () => {
    return (
        <div className='news'> 
            <h1>  
            Our news
            </h1>
            <div className='items'>
                <Item 
                    imageUrl={image1}
                    header="Tincidunt"
                    text="Phasellus arcu justo, ullamcorper non diam sit amet, luctus condimentum metus. Nullam tempus egestas efficitur. Sed quam dolor."
                />
                <Item 
                    imageUrl={image2}
                    header="Duis bibendum"
                    text="Ut arcu arcu, faucibus eu risus blandit, pulvinar viverra justo. Phasellus arcu justo, ullamcorper non diam sit amet, luctus condimentum metus. In hac habitasse platea dictumst."
                />
                <Item 
                    imageUrl={image3}
                    header="Donec ligula"
                    text="Nullam tempus egestas efficitur. Sed quam dolor, vulputate sed mattis et, sodales quis orci. Ut arcu arcu, faucibus eu risus blandit."
                />
            </div>
        </div>
    )
}

export {
    News,
}