//* Base
import "./Item.css";

export function Item() {
  return (
    <li className="ITEM__container">
      <span className="ITEM__check">v</span>
      <span className="ITEM__text GLOBAL__text-body--1">Hola</span>
      <span className="ITEM__remove">x</span>
    </li>
  );
}
