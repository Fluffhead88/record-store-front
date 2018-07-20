import React, { Component } from 'react';
import Track from './Track';

class Album extends Component {
  constructor(props){
    super(props);

    this.state = {
      tracks: this.props.track || [],
      track: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addTrack = this._addTrack.bind(this);
    this._removeTrack=this._removeTrack.bind(this);
  }

  _handleInput(event) {
    if(event.target.name === 'track') {
      this.setState({track: event.target.value});
    }
  }

  _addTrack(event) {
    event.preventDefault();
    this.props.addTrack(this.state.track);
    this.setState({track: ''});
  }
  _removeTrack(track){
    let tracks = this.state.tracks;
    tracks.splice(tracks.indexOf(track), 1);
    this.setState({tracks});
  }

  render() {
    let $tracks = this.state.tracks.map((track, index)=><Track key={index} track={track}/>);
    return(
      <div>
        <p>
          <button className="btn btn-warning" type="button" data-toggle="collapse" data-target={`#${this.props.album.album.replace(/ /g,'')}`} aria-expanded="false" aria-controls="collapseExample">
            {this.props.album.album}
          </button>
        </p>
        <div className="collapse" id={this.props.album.album.replace(/ /g,'')}>
          <div className="card card-body">
            <form onSubmit={this._addTrack}>
              <div className="form-group">
                <label for="TrackInput">Add Track</label>
                <input id="TrackInput" className="form-control" name="track" type="text" placeholder="track name" value={this.state.track} onChange={this._handleInput} required/>
              </div>
              <input className="btn btn-primary" type="submit" value="Add Track"/>
            </form>
            {$tracks}
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
