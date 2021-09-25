import "./App.css";
import React from "react";
import Header from "./components/header";
import Form from "./components/Form";
import SocialFollow from "./components/SocialFollow";
function App() {

  
  return (
    <div className="container-fluid">
      <Header />
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #F6B25E,#F9F871)",
          height: "80vh",
        }}
        className="d-flex justify-content-center"
      >
        <Form/>
      </div>

      <div className="d-flex align-items-center">
        <SocialFollow />
      </div>
    </div>
  );
}

export default App;
