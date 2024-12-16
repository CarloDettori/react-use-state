"use strict"
import { useState } from "react";
import languages from "../datas/languages";

function DescriptionComponent({ element }) {
    const [clicked, setClicked] = useState(false)
    return (
        <>
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
        </>
    )
}

export default DescriptionComponent;