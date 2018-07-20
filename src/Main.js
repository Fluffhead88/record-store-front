import React, { Component } from 'react';
import Band from './Band';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      band: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._addBand = this._addBand.bind(this);
  }

  _handleInput(event) {
    if(event.target.name === 'band') {
      this.setState({band: event.target.value});
    }
  }

  _addBand(event) {
    event.preventDefault();
    this.props.addBand(this.state.band);

    this.setState({band: ''});
  }

  render() {
    let $bands = this.props.bands.map((band)=><Band key={band.id} band={band} addAlbum={this.props.addAlbum}/>);

    return (
      <div>
        <form onSubmit={this._addBand}>
          <div className="form-group">
            <label for="BandInput">Add Band</label>
            <input id="BandInput" className="form-control" name="band" value={this.state.band} type="text" placeholder="name" onChange={this._handleInput} required/>
          </div>
          <input className="btn btn-primary" type="submit" value="New Band"/>
        </form>
        <ul>{$bands}</ul>
      </div>
    );
  }
}

export default Main;
