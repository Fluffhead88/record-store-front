import React, {Component} from 'react';

class Album extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="album">
        <p>{this.props.band.album}</p>
      </div>
    );
  }
}
export default Album;
