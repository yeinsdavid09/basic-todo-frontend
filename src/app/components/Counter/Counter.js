//* Base
import "./Counter.css";

export function Counter({ completed = 0, total = 0 }) {
  return (
    <div className="COUNTER__main-container">
      <h2 className="COUNTER__title GLOBAL__text-heading--3">
        Has completado {completed} de {total} tareas
      </h2>
    </div>
  );
}
