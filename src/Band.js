import React, {Component} from 'react';

class Band extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="col-12 col-md">
        <ul>
          <li>{this.props.band.band}</li>
        </ul>
      </div>
    );
  }
}

export default Band