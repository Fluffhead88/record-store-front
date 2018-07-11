import React, {Component} from 'react';
import Band from "./Band.js";
import Album from "./Album.js";
import BandForm from './BandForm.js';

var data = [
  {
   id: 1,
   band: "Phish",
   albums: [
     {
       id: 1,
       album: "Rift",
       [{
          id: 1,
          track: "Rift"
      },
      {
          id: 2,
          track: "Fast Enough for You"
       }]
     },
     {
       id: 2,
       album: "Hoist",
       [{
          id: 1,
          track: "Julis"
      },
      {
          id: 2,
          track: "Down with Disease"
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
      [{
         id: 1,
         track: "Box of Rain"
     },
     {
         id: 2,
         track: "Friend of the Devil"
      }]
    },
    {
      id: 2,
      album: "Terrapin Station",
      [{
         id: 1,
         track: "Estimated Prophet"
     },
     {
         id: 2,
         track: "Dancin' in the Streets"
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
      [{
         id: 1,
         track: "Chilly Water"
     },
     {
         id: 2,
         track: "Travelin' Light"
      }]
    },
    {
      id: 2,
      album: "Ain't Life Grand",
      [{
         id: 1,
         track: "Little Kin"
     },
     {
         id: 2,
         track: "Ain't Life Grand"
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
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Albums
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Tracks
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
    );
  }
}

export default Main;
