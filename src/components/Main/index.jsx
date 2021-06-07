import React from 'react'

import './styles.css'
import Banner from '/src/components/Banner'
import Wrapper from '/src/components/Wrapper'
import Sidebar from '/src/components/Sidebar'

export default function Main() {
    return (
        <div className="Div-main">
            <div>   
                <Banner/>         
            </div>
            <div>
                <Wrapper/> 
                <Sidebar/>
            </div>
        </div>
    )
}