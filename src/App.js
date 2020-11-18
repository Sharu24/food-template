import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import Food from "./components/Food";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Menu />
        <div
          class="w3-main w3-content w3-padding"
          style={{ maxWidth: "1200px", marginTop: "100px" }}
        >
          <Food />
          <About />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
