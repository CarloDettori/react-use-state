"use strict"
import ToggleShowComponent from "./ToggleShowComponent";
function ButtonComponent({ element, onClick }) {
    console.log(element);
    return <li> <a key="element.id" href="#" className="btn btn-primary" onClick={() => onClick(element)}>{element.title}</a></li >;
}
export default ButtonComponent;


//onClick = { ToggleShowComponent }