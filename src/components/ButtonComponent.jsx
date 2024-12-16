"use strict"
import { useState } from "react";
import languages from "../datas/languages";



function ButtonComponent({ element }) {
    const [clicked, setClicked] = useState(false)
    function toggleShow() {
        setClicked(!clicked);
    }

    console.log(element);
    return <li> <a key="element.id" href="#" className="btn btn-primary" onClick={toggleShow}>{element.title}</a></li >;
}
export default ButtonComponent;