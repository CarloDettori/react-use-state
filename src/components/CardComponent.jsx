"use strict"
import { useState } from "react";
import languages from "../datas/languages";
import ButtonComponent from "./ButtonComponent";
//import DescriptionComponent from "./DescriptionComponent";



function CardComponent() {
    const [activeDescription, setActiveDescription] = useState(languages[0])
    const [clicked, setClicked] = useState(0);
    function ToggleShowComponent() {
        setActiveDescription;
    }
    return (
        <div className="card">
            <h5 className="card-header">Learn Web development </h5>
            <div className="card-body">
                <ul id="button-box">
                    {languages.map((language) => (
                        <ButtonComponent
                            key={`button-${language.id}`}
                            element={language}
                            onClick={(language) => { setActiveDescription(language) }} />
                    ))}
                </ul>
                <div id='description'>
                    <h5>{activeDescription.title}</h5> <p>{activeDescription.description}</p>
                    {/* {languages.map((language) => (
                        <DescriptionComponent
                            key={`description-${language.id}`}
                            element={language}
                            clicked={activeDescription === language.id}
                            onToggle={() => { setActiveDescription(language.id) }} /> 
                    ))}*/}

                </div>
            </div>
        </div>
    )
}

export default CardComponent;