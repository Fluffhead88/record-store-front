import React, {Component} from 'react';
import Bands from "./Bands.js";


var data = [
  {
   id: 1,
   band: "Phish",
   albums: [
     {
       id: 1,
       album: "Rift",
       track: [{
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
  band:"The Grateful Dead",
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
  band:"Widespread Panic",
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
      data:[]
    }
    this._removeBand = this._removeBand.bind(this);
    this._addBand = this._addBand.bind(this);
    this._addAlbum = this._addAlbum.bind(this);
  }

  _removeBand(band){
    let data = this.state.data
    data.splice(data.indexOf(band), 1);
    this.setState({data});
  }

  _addBand(band){
    let data = this.state.data;
    data.push(band);
    this.setState({data});
  }

  _addAlbum(album){
    let data = this.state.data;
    band.album.push({album});
    this.setState({data});
  }

  _addTrack(track){
    let data = this.state.data;
    band.album.track.push({track});
    this.setState({data});
  }

render(){
  let self=this;

  let $data = this.state.data.map(function(band){
    return(
      <Band key={band.id} band={band} removeBand={()=>self._removeBand(band)}/>
    )
  });


    return(

  <div className="container">
<Bands bands={this.state.data} addBand={this._addBand} addAlbum={this._addAlbum} addTrack={this._addTrack}/>
  </div>

    );
  }
}

export default Main;
