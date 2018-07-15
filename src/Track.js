import React, {Component} from 'react';

class Track extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {this.props.tracks.tracks}
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
          <div class="card-body">
    
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
