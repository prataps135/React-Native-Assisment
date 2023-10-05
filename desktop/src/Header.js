import "./Header.css";
import cart from "./icons/cart.png";
import logs from "./icons/logs.png";

export default function Headers({count}) {
  return (
    <>
      <div className="header">
        <h2 className="brand-name">E-Commerce</h2>
        <div className="btnn">
          <h3>
            <img src={logs} alt="logs" />
            Share logs
          </h3>
          <h4>
            <img src={cart} alt="cart" />{count}
          </h4>
        </div>
      </div>
    </>
  );
}
