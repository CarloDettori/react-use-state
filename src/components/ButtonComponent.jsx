"use strict"
import languages from "../datas/languages";

function ButtonComponent({ element }) {
    console.log(element);
    return <li> <a key="element.id" href="#" className="btn btn-primary">{element.title}</a></li >;
}
export default ButtonComponent;