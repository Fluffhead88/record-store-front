import React, {Component} from 'react';
import Track from "./Track.js"
import TrackForm from "./TrackForm.js"

class Album extends Component{
  constructor(props){
    super(props);

    this.state = {
      tracks: this.props.album.tracks
    }

    this._removeTrack=this._removeTrack.bind(this);
    this._addTrack = this._addTrack.bind(this);
  }

_removeTrack(track){
  let tracks = this.state.tracks;
  tracks.splice(tracks.indexOf(track), 1);
  this.setState({tracks});
}

_addTrack(track){
  let tracks = this.state.tracks;
  tracks.push(track);
  this.setState({tracks});
}

  render(){
    let self=this;

    let $tracks = this.state.tracks.map(function(track){
      return (
        <Track key={track.id} track={track} removeTrack={()=>this._removeTrack(track)}/>
      )
    });
    return(
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
            <TrackForm addTrack={this._addTrack}/>
            {$tracks}
          </div>
        </div>
      </div>
    );
  }
}
export default Album;
