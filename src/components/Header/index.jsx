import React from "react";

import "./styles.css";
import { option } from "./constants.js";
const src = "/src/assets/img/logo.jpg";

export default function Header() {
  return (
    <header class="nav-bar">
      <div class="nav-container">
        <div class="brand">
          <a href="#">
            <img src={src} />
          </a>
        </div>
        <nav>
          <div class="nav-mobile">
            <a id="nav-toggle" href="#!"></a>
          </div>
          <ul class="nav-list">
            {option.map((op) => (
              <li>
                <a href={op.link}>{op.name}</a>
                {op.options && (
                  <ul class="nav-dropdown">
                    {op.options.map((index) => (
                      <li>
                        <a href={index.link}>{index.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
