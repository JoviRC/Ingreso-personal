import React from "react";
import { TestAdminApi } from "./api/TestAdminApi";
import "./App.css";
import { ModalLoginAdmin } from "./Components/ModalLoginAdmin";

function App() {
  return (
    <div className="App">
      {/* <CrudApiUser /> */}
      <TestAdminApi>
        <ModalLoginAdmin />
      </TestAdminApi>
    </div>
  );
}

export default App;
