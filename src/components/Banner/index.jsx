import React from "react";

import "./styles.css";

const src = '/src/assets/img/amongus1.jpg';
/*  const src = ['/src/assets/img/amongus1.jpg', '/src/assets/img/csgo1.jpg'] */
export default function Banner() {
  return (
    <div>
      <div>
        <img src={src} className="img-banner"></img>
      </div>
    </div>
  );
}
