import React, {Component} from 'react';
import Track from "./Track.js";

class Album extends Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       tracks: this.album.tracks
//     }
//
//     this._removeTrack=this._removeTrack.bind(this);
//     this._addTrack = this._addTrack.bind(this);
//   }
//
// _removeTrack(track){
//   let tracks = this.state.tracks;
//   tracks.splice(tracks.indexOf(track), 1);
//   this.setState({tracks});
// }
//
// _addTrack(track){
//   let tracks = this.state.tracks;
//   tracks.push(track);
//   this.setState({tracks});
// }

  render(){
    //
    // let $tracks = this.state.tracks.map(function(track){
    //   return (
    //     <Track key={track.id} track={track} removeTrack={()=>this._removeTrack(track)}/>
    //   )
    // });
    return(
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {this.props.album.album}
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
      {this.props.album.tracks}
        </div>
      </div>
      </div>
    );
  }
}
export default Album;
