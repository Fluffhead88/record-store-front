import React, {Component} from 'react';
import Band from "./Band.js";
import Album from "./Album.js";
import Track from "./Track.js";
import BandForm from './BandForm.js';
import AlbumForm from './AlbumForm.js';
import TrackForm from './TrackForm.js';

var data = [
  {
   id: 1,
   band: "Phish",
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
       tracks:[{
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
      tracks:[{
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
      tracks:[{
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
      tracks:[{
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
      tracks:[{
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
      data:data
    }
    this._removeBand = this._removeBand.bind(this);
    this._addBand = this._addBand.bind(this);
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

render(){
  let self=this;

  let $data = this.state.data.map(function(band){
    return(
      <Band key={band.id} band={band} removeBand={()=>self._removeBand(band)}/>
    )
  });


    return(
  <div className="container">
    <div className="row justify-content-center">
      <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bands
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <BandForm addBand={this._addBand}/>
        {$data}
      </div>
    </div>
  </div>
<Band/>
<Album/>
</div>
    </div>
  </div>

    );
  }
}

export default Main;
