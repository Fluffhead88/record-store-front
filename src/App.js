import React, { Component } from 'react';
import './App.css';
import Main from './Main';

var bands = [
  {
   id: 1,
   name: "Phish",
   albums: [
     {
       album: "Rift",
       track: ["Rift", "Fast Enough for You"]
     },
     {
       album: "Hoist",
       track:["Julis", "Down with Disease"]
     }
   ]
   },{
  name:"The Grateful Dead",
  albums: [
    {
      album: "American Beauty",
      track:[ "Box of Rain", "Friend of the Devil"]
    },
    {
      album: "Terrapin Station",
      track:["Estimated Prophet", "Dancin' in the Streets"]
    }
  ]
},{
  id: 3,
  name:"Widespread Panic",
  albums: [
    {
      album: "Space Wrangler",
      track:[ "Chilly Water", "Travelin' Light"]
    },
    {
      album: "Ain't Life Grand",
      track:["Little Kin", "Ain't Life Grand"]
    }
  ]
}]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      bands: []
    }

    this._addBand = this._addBand.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
    this._removeBand = this._removeBand.bind(this);
    this._addTrack = this._addTrack.bind(this);
  }

  componentDidMount() {
    this.setState({bands});
  }

  _addBand(name) {
    let id = 1;
    let bands = this.state.bands;
    bands.forEach(function(band){
      if(id <= band.id){
        id = band.id + 1;
      }
    });

    let band = {id, name, albums: []}
    bands.push(band);
  }

  _addAlbum(id, album) {
    let bands = this.state.bands;
    bands.forEach(function(band){
      if(band.id === id) {
        if(band.albums) {
          band.albums.push({album});
        } else {
          band.albums = [{album}];
        }
      }
    });
  }
  _addTrack(id, track){
    let bands = this.state.bands;
    bands.forEach(function(band){
      if(band.id===id){
        if(band.albums.track){
          bands.albums.track.push({track});
        } else {
          band.albums.track =[{track}];
        }
      }
    });
  }

  _removeBand(band){
    let bands = this.state.bands
    bands.splice(bands.indexOf(band), 1);
  }

  render() {
    return (
      <div className="container">
        <Main bands={this.state.bands} addBand={this._addBand} addAlbum={this._addAlbum} addTrack={this._addTrack} removeBand={this._removeBand}/>
      </div>
    );
  }
}

export default App;
