//* Base
import "./Search.css";

export function Search() {
  return (
    <fieldset className="SEARCH__main-container">
      <label className="SEARCH__label GLOBAL__text-body--1" htmlFor="search">
        <strong>Busca una tarea</strong>
      </label>
      <input
        className="SEARCH__input GLOBAL__text-body--1"
        id="search"
        type="text"
        placeholder="Escribe la tarea que deseas encontrar..."
      ></input>
    </fieldset>
  );
}
