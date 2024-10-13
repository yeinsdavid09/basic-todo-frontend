//* Base
import "./Item.css";

export function Item({ index, description, completed }) {
  return (
    <li className={`ITEM__container ${completed && "--completed"}`}>
      <div className="ITEM__texts--wrapper">
        <span className="ITEM__button --index GLOBAL__text-body--1">
          {index}
        </span>
        <span className="ITEM__text GLOBAL__text-body--1">{description}</span>
      </div>
      <div className="ITEM__buttons--wrapper">
        <span className="ITEM__button --check">v</span>
        <span className="ITEM__button --remove">x</span>
      </div>
    </li>
  );
}
