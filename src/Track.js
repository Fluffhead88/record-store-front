import React, {Component} from 'react';

class Track extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="card">
        <div class="card-header">
          <h5>
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#${this.props.track.track.replace(/ /g,'')}`} aria-expanded="false" aria-controls="collapseThree">
              {this.props.track.track}
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
