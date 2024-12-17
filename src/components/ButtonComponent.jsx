"use strict"
import ToggleShowComponent from "./ToggleShowComponent";
function ButtonComponent({ element, clicked }) {
    console.log(element);
    return <li> <a key="element.id" href="#" className="btn btn-primary" onClick={onToggle}>{element.title}</a></li >;
}
export default ButtonComponent;


//onClick = { ToggleShowComponent }