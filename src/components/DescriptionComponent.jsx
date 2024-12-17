"use strict"


function DescriptionComponent({ element, onToggle }) {
    return (
        <>
            <div className={clicked ? "show" : ""}>
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.description}</p>
            </div>
        </>
    )
}
export default DescriptionComponent;