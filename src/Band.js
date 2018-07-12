import React, {Component} from 'react';
import Album from './Album.js';
import AlbumForm from "./AlbumForm.js";
import Main from "./Main.js"

class Band extends Component{
  constructor(props){
    super(props);

    this.state = {
      albums: this.band.albums
    }
    this._addAlbum = this._addAlbum.bind(this);
    this._removeAlbum = this._removeAlbum.bind(this);
  }

_addAlbum(album){
  let albums = this.state.albums;
  albums.push(album);
  this.setState({albums});
}
_removeAlbum(album){
  let albums = this.state.albums;
  albums.splice(album.indexOf(album), 1);
  this.setState({albums});
}

  render(){
    let self = this;
    let $albums = this.state.albums.map(function(album){
      return(
        <Album key={album.id} album={album} removeAlbum={()=>self._removeAlbum(album)}/>
      )
    });
    return(
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
            <AlbumForm addAlbum={this._addAlbum}/>
            {$albums}
        </div>
      </div>
      </div>
    );
  }
}

export default Band;
