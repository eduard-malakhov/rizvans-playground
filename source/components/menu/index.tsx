import React, { FunctionComponent } from "react";

import './style.less';

interface MenuItem {
    caption: string;
    href: string;
}

const MENU_ITEMS: Array<MenuItem> = [
    {
        caption: 'Gallery',
        href: '#gallery',
    },
    {
        caption: 'Contact us',
        href: '#contact-us',
    },
    {
        caption: 'Group excursions',
        href: '#group-expersions',
    },
    {
        caption: 'Prices',
        href: '#prices',
    },
];

const Menu: FunctionComponent = () => {
    console.log('Rendering menu...');

    return (
        <div className="menu">
            {
                MENU_ITEMS.map((item) => <a className="item" href={ item.href } key={ item.href }>{ item.caption }</a>)
            }
        </div>
    );
}

export {
    Menu,
}