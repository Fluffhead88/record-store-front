import React, {Component} from 'react';

class AlbumForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      album:"", tracks:[]
    }
  this._handleInput=this._handleInput.bind(this);
  this._addAlbum=this.addAlbum.bind(this);
  }
  _handleInput(event){
    let content = event.target.value;
    if(event.target.name ==="album"){
      this.setState({album:content});
    }
  }

  _addAlbum(event){
    event.preventDefault();
    let context = this.state;
    this.props.addAlbum(context);
    this.setState({album:""})
  }

  render(){
    return(
      <form onSubmit={this._addAlbum}>
        <div className="form-group">
          <label htmlFor="albumInput">Album Input</label>
          <input name="album" type="text" className="form-control" id="albumInput" placeholder="Enter album name" value={this.state.album} onChange={this._handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Add a Album</button>
      </form>
    );
  }
}

export default AlbumForm;
