"use strict"


import ButtonComponent from "./ButtonComponent";
import DescriptionComponent from "./DescriptionComponent";


function CardComponent() {

    return (
        <div className="card">
            <h5 className="card-header">Learn Web development </h5>
            <div className="card-body">
                <ul id="button-box">
                    <ButtonComponent />
                </ul>
                <div id='description'>
                    < DescriptionComponent />
                </div>

            </div>
        </div>
    )
}

export default CardComponent;