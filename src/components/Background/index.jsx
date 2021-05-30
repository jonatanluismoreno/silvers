import React from 'react'

import './styles.css'

const src = `https://th.bing.com/th/id/R315dbf959d428662ccc381d192c1551b?rik=vbpLIcQj2179pw&pid=ImgRaw`

export default function Background () {
    return (
        <div class="div-background">
            <img src={src} class="img-background"/>
        </div>
        
    )
}
