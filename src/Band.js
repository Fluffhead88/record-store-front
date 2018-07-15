import React, {Component} from 'react';
import Album from './Album.js';


class Band extends Component{
  constructor(props){
    super(props);

    this.state = {
      albums: this.props.band.albums || [],
      album:""
    }
    this._addAlbum = this._addAlbum.bind(this);
    this._removeAlbum = this._removeAlbum.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }

_handleInput(event){
  if(event.target.name === 'album'){
    this.setState({album:event.target.value});
  }
}

_addAlbum(event){
  event.preventDefault();
  let albums = this.state.album;
  this.props.addAlbum(this.props.band.id, albums);
  this.setState({album: ''});
}
_removeAlbum(album){
  let albums = this.state.album;
  albums.splice(album.indexOf(album), 1);
  this.setState({albums});
}

  render(){
    let $albums = this.state.albums.map(function(album, id){
      return(
        <Album key={album.id} album={album} removeAlbum={()=>this._removeAlbum(album)}/>
      )
    });
    return(
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {this.props.band.name}
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            <Album addAlbum={this._addAlbum}/>
            {$albums}
        </div>
      </div>
      </div>
    );
  }
}

export default Band;
