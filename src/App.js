import React, { Component } from 'react';
import './App.css';
import Bands from "./Bands.js";

var bands = [
  {
   id: 1,
   name: "Phish",
   albums: [
     {
       id: 1,
       album: "Rift",
       tracks: [{
          id: 1,
          name: "Rift"
        },
      {
          id: 2,
          name: "Fast Enough for You"
       }]
     },
     {
       id: 2,
       album: "Hoist",
       track:[{
          id: 1,
          name: "Julis"
      },
      {
          id: 2,
          name: "Down with Disease"
       }]
     }
   ]
   },{
  id: 2,
  name:"The Grateful Dead",
  albums: [
    {
      id: 1,
      album: "American Beauty",
      track:[{
         id: 1,
         name: "Box of Rain"
     },
     {
         id: 2,
         name: "Friend of the Devil"
      }]
    },
    {
      id: 2,
      album: "Terrapin Station",
      track:[{
         id: 1,
         name: "Estimated Prophet"
     },
     {
         id: 2,
         name: "Dancin' in the Streets"
      }]
    }
  ]
},{
  id: 3,
  name:"Widespread Panic",
  albums: [
    {
      id: 1,
      album: "Space Wrangler",
      track:[{
         id: 1,
         name: "Chilly Water"
     },
     {
         id: 2,
         name: "Travelin' Light"
      }]
    },
    {
      id: 2,
      album: "Ain't Life Grand",
      track:[{
         id: 1,
         name: "Little Kin"
     },
     {
         id: 2,
         name: "Ain't Life Grand"
      }]
    }
  ]
}]


class App extends Component {

  constructor(props){
    super(props);

    this.state={
      bands:[]
    }
    this._removeBand = this._removeBand.bind(this);
    this._addBand = this._addBand.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  componentDidMount(){
    this.setState({bands});
  }

  _removeBand(band){
    let bands = this.state.bands
    bands.splice(bands.indexOf(band), 1);
  }

  _addBand(band){
    let id = 1;
    let bands = this.state.bands;
    bands.forEach(function(band){
      if(id<=band.id){
        id = band.id+1;
      }
    })
    // let band = {id, name, albums:[]}
    bands.push(band);
  }

  _addAlbum(album){
    let bands = this.state.bands;
    bands.forEach(function(band){
      // if(band.id===id){
        if(band.albums){
          bands.albums.push({album});
        } else {
          band.albums =[{album}];
        // }
      }
    });
  }

  _addTrack(track){
    let bands = this.state.bands;
    bands.forEach(function(band){
      // if(band.id===id){
        if(band.albums.track){
          bands.albums.track.push({track});
        } else {
          band.albums.track =[{track}];
        // }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Bands bands={this.state.bands} addBand={this._addBand} addAlbum={this._addAlbum} addTrack={this._addTrack}/>
      </div>
    );
  }
}

export default App;
