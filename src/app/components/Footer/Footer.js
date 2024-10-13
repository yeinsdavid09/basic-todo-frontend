//* Base
import "./Footer.css";

export function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="FOOTER__main-container">
      <p className="FOOTER__text GLOBAL__text-body--1">
        &copy; Copyright {currentDate}
      </p>
    </div>
  );
}
