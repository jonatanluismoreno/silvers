import React from 'react'

import './Banner.css'

const src = `https://th.bing.com/th/id/R315dbf959d428662ccc381d192c1551b?rik=vbpLIcQj2179pw&pid=ImgRaw`

export default function Banner () {
    return (
        <div class="banner-css">
            <img src={src} id="img-banner"></img>
        </div>
        
    )
}
