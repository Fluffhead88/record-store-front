import React, {Component} from 'react';
import Band from './Band';

class Band extends Component{
  constructor(props){
    super(props);

    this.state={
      band:''
    }
    this._handleInput = this._handleInput.bind(this);
    this._addBand = this._addBand.bind(this);
 }

_handleInput(event){

  let content = event.target.value;

  if(event.target.name === "band"){
    this.setState({band: content});
  }
}

_addBand(event){
  event.preventDefault();

  let context = this.state.band;
  this.props.addBand(context);

  this.setState({band:''});
}

  render(){
    let $bands = this.props.data.map(function(band){
      return(
        <Band key={band.id} band={band} addAlbum={this.props.addAlbum}/>
      );
    })
    return(
      <div>
      <form onSubmit={this._addBand}>
        <div className="form-group">
          <label htmlFor="bandInput">Band Input</label>
          <input name="band" type="text" className="form-control" id="bandInput" placeholder="Enter band name" value={this.state.band} onChange={this._handleInput}/>
        </div>
        <button type="submit" className="btn btn-primary">Add a Band</button>
      </form>
      <ul>
        {$bands}
      </ul>
      </div>
    );
  }
}

export default Bands;
