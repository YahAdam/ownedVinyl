import "./App.css";
import Record from "./components/record";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wish__list">Wish list goes here</div> {/* make this a comp/view */}
        <div className="App__container">
          <div className="title">Adam's vinyl list</div>
          <Record />
          
        </div>
        <div className="top__artists">Top artists goes here</div> {/* make this a comp/view */}
      </div>
    );
  }
}

export default App;
