import "./Content.css";
import right from "./icons/right.png";
import banana from "./icons/banana.png";
import stawberry from "./icons/stawberry.png";
import yogat from "./icons/yogat.png";
import blackberry from "./icons/blackberry.png";
import plus from "./icons/plus.png";

export default function Content({ names, fruits, increment }) {
  return (
    <div className="mainContainer">
      {names.map((name) => {
        return (
          <>
            <div className="HeadLine">
              <h3>{name}</h3>
              <img src={right} alt="right"></img>
            </div>
            <div className="fruits">
              {/* <img src={stawberry} alt="stawberry"></img>
              <img src={yogat} alt="yogat"></img>
              <img src={blackberry} alt="blackberry"></img>
              <img src={banana} alt="banana"></img>
              <img src={stawberry} alt="stawberry"></img>
              <img src={yogat} alt="yogat"></img>
              <img src={blackberry} alt="blackberry"></img> */}
              {fruits.map((fruit) => {
                return (
                  <div className="down">
                    <img src={banana} alt="banana"></img>
                    <button
                      onClick={() => {
                        increment();
                      }}
                    >
                      <img className="up" src={plus} alt="add"></img>
                    </button>
                    <h3>${fruit.price}</h3>
                    <h4>{fruit.name}</h4>
                    <h5>{fruit.weight}</h5>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
