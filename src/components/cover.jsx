import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Cover = () => {
    return (
        <ScrollableAnchor id={'inicio'}>
            <div className="cover">
                <img src="/img/logo.png" alt="Logo Varal das Águas"/>
            </div>
        </ScrollableAnchor>
    )
}

export default Cover;