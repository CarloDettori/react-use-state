"use strict"
import languages from "../datas/languages";

function DescriptionComponent(props) {

    return (
        <>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.title}</p>
        </>
    )
}

export default DescriptionComponent;