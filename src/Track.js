import React, {Component} from 'react';
import Main from "./Main.js"

class Track extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="col-12 col-md">
        <ul>
          <li>{this.props.track.name}</li>
          <input type="button" className="btn btn-danger" value="Remove Track" onClick={this.props.removeTrack}/>
        </ul>

      </div>
    );
  }
}

export default Track;
