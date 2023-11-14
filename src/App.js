import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import SnackChip from "./SnackChip";
import SnackHershy from "./SnackHershy";
import SnackStarburst from "./SnackStarburst";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/chip">
          <SnackChip />
        </Route>
        <Route exact path="/hershy">
          <SnackHershy />
        </Route>
        <Route exact path="/starburst">
          <SnackStarburst />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
