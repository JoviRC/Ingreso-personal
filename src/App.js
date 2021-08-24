import React,{useState} from "react";
import { TestAdminApi } from "./api/TestAdminApi";
import "./App.css";
import { ModalLoginAdmin } from "./Components/ModalLoginAdmin";

function App() {
  const [btnAdmin, setBtnAdmin] = useState(true)
  const [btnName,setBtnName] = useState("LogIn")
  const handleButton = () => {
    setBtnAdmin(!btnAdmin)
    btnAdmin === true? setBtnName("LogOut"): setBtnName("LogIn")
    
  }

  return (
    <div className="App">
      <TestAdminApi>
        <button type="button" className="btnAdmin" onClick={handleButton}>{btnName}</button>
        {btnAdmin === false ? <ModalLoginAdmin />: ""}
      </TestAdminApi>
    </div>
  );
}

export default App;
