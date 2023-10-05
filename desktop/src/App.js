import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { menuName as menu } from "./database/menuName";
import {fruitsDetail as fDetail} from "./database/fruitsDetails";

function App() {
  const menuName = menu;
  const fruitsDetail = fDetail;

  const [count, setCounter] = useState(0);
  function increment() {
    setCounter((preValue) => {
      return preValue + 1;
    });
  }
  return (
    <>
      <Header className="head" count={count} ></Header>
      <div className="grid-container">
        <Sidebar className="sidebar" names={menuName}></Sidebar>
        <Content names={menuName} fruits={fruitsDetail} increment={increment}></Content>
      </div>
    </>
  );
}

export default App;
