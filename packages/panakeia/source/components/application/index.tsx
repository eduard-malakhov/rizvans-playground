import React, { FunctionComponent } from 'react';
import { Announcements } from '../announcements';
import { Footer } from '../footer';
import { Header } from '../header';
import { Hero } from '../hero';
import { Links } from '../links';
import { News } from '../news';
import { Newsletter } from '../newsletter';

import './styles.less';

const Application: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Hero />
            <News />
            <Newsletter />
            <Announcements />
            <Links />
            <Footer />
        </div>
    );
}

export {
    Application,
}