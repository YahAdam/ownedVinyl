import { Component } from "react";
import "./App.css";
import Record from "./views/Record/Record";
import BaseTitle from "./components/BaseTitle/BaseTitle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <BaseTitle title="Adam's Vinyl List" size="large"/>
          <Record />
        </div>
      </div>
    );
    // not sure what I want to do with these yet, possibly make them new views and route to them,
    // leaving here for now
    //<div className="wish__list">Wish list goes here</div> {/* make this a comp/view */}
  } // <div className="top__artists">Top artists goes here</div> {/* make this a comp/view */}
}

export default App;
