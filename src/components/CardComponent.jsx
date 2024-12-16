"use strict"
import { useState } from "react";
import languages from "../datas/languages";
import ButtonComponent from "./ButtonComponent";
import DescriptionComponent from "./DescriptionComponent";



function CardComponent() {
    const [clicked, setClicked] = useState(0)

    return (
        <div className="card">
            <h5 className="card-header">Learn Web development </h5>
            <div className="card-body">
                <ul id="button-box">
                    {languages.map((language) => (
                        <ButtonComponent key={`button-${language.id}`} element={language} />
                    ))}
                </ul>
                <div id='description'>
                    {languages.map((language) => (
                        <DescriptionComponent key={`description-${language.id}`} element={language} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CardComponent;