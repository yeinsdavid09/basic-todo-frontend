//* Base
import "./Item.css";

export function Item({
  taskIndex,
  description,
  completed,
  onComplete,
  onDelete,
}) {
  return (
    <li className={`ITEM__container ${completed && "--completed"}`}>
      <div className="ITEM__texts--wrapper">
        <span className="ITEM__button --index GLOBAL__text-body--1">
          {taskIndex + 1}
        </span>
        <span className="ITEM__text GLOBAL__text-body--1">{description}</span>
      </div>
      <div className="ITEM__buttons--wrapper">
        <span className="ITEM__button --check" onClick={onComplete}>
          v
        </span>
        <span className="ITEM__button --remove" onClick={onDelete}>
          x
        </span>
      </div>
    </li>
  );
}
