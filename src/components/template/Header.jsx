import React from "react";
import './Header.css'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">{props.title}</h1>
    </header>