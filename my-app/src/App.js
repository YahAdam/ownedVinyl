import './App.css';
import Record from "./components/record";
import { Component } from 'react';

class App extends Component {
  state = {
    records: [{artist: 'Pearl Jam', title: 'Ten', color: 'Black'}, {artist: 'I Prevail', title: 'IDR', color: 'Black'}],
    wishList: [{artist: 'Bring Me The Horizon', title: 'That\'s The Spirit'}],
  };

  render() {
    return (
      <div className="App">
         <div className='wish__list'>
            Wish list goes here
          </div>
        <div className='App__container'>
        <div className='title'>
        Adam's owned vinyl
        </div>
        <Record records={this.state.records} />
        </div>
        <div className='top__artists'>
            Top artists goes here
          </div>
      </div>
    );
  }
}

export default App;
