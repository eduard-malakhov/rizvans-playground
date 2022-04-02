import React, { FunctionComponent } from 'react';

import './styles.less';

const Menu: FunctionComponent = () => {
    return (
        <div className='menu'>
            <div className="item">Fusce at</div>
            <div className="item">Facilisis</div>
            <div className="item">Ante donec</div>
            <div className="item">Blandit rhoncus</div>
            <div className="item">Placerat</div>
        </div>
    )
}

export {
    Menu,
}