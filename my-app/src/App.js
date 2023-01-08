import './App.css';
import Record from "./components/record";
import { Component } from 'react';

class App extends Component {
  state = {
    records: [{artist: 'Pearl Jam', title: 'Ten', color: 'Black'}, {artist: 'I Prevail', title: 'IDR', color: 'Black'}],
  };

  render() {
    return (
      <div className="App">
        <div className='App__container'>
        <div className='title'>
        Adam's owned vinyl
        </div>
        <Record records={this.state.records} />
        </div>
      </div>
    );
  }
}

export default App;
