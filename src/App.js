import React from "react";
import Card from "./component/Card";
import Cardfolder1 from "./component/Cardfolder1";
import Cardfolder2 from "./component/Cardfolder2";
import Cardfolder3 from "./component/Cardfolder3";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Cardfolder1 />
        <Cardfolder2 />
        <Cardfolder3 />
      </div>
      <br />
      <br />
      <Card />
      <br />
      <List />
    </div>
  );
}

export default App;
