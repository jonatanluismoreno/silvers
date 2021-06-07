import React from 'react';

import './styles.css'
/* import Header from '/src/components/Header';*/

import Background from '/src/components/Background';
import Main from '/src/components/Main';

export default function Mainpage() {
    return (
    <div className="main-div">
        <Background/>
        <Main/>
</div>
)
}