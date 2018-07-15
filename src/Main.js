import React, {Component} from 'react';
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

class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      bands:[]
    }
    this._removeBand = this._removeBand.bind(this);
    this._addBand = this._addBand.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  _removeBand(band){
    let bands = this.state.bands
    bands.splice(bands.indexOf(band), 1);
    this.setState({bands});
  }

  _addBand(band){
    let bands = this.state.bands;
    bands.push(band);
    this.setState({bands});
  }

  _addAlbum(album){
    let bands = this.state.bands;
    bands.album.push({album});
    this.setState({bands});
  }

  _addTrack(track){
    let bands = this.state.bands;
    bands.album.track.push({track});
    this.setState({bands});
  }

render(){
  let self=this;

  let $bands = this.state.bands.map(function(band){
    return(
      <Bands key={band.id} bands={band} removeBand={()=>self._removeBand(band)}/>
    )
  });


    return(

  <div className="container">
<Bands bands={this.state.bands} addBand={this._addBand} addAlbum={this._addAlbum} addTrack={this._addTrack}/>
  </div>

    );
  }
}

export default Main;
