// import React, {Component} from 'react';
//
// class TrackForm extends Component{
//   constructor(props){
//     super(props)
//
//     this.state = {
//       name: ""
//     }
//   this._handleInput=this._handleInput.bind(this);
//   this._addTrack=this.addTrack.bind(this);
//   }
//   _handleInput(event){
//     let content = event.target.value;
//     if(event.target.name ==="name"){
//       this.setState({name:content});
//     }
//   }
//
//   _addTrack(event){
//     event.preventDefault();
//     let context = this.state;
//     this.props.addTrack(context);
//     this.setState({name:""})
//   }
//
//   render(){
//     return(
//       <form onSubmit={this._addTrack}>
//         <div className="form-group">
//           <label htmlFor="trackInput">Track Input</label>
//           <input name="track" type="text" className="form-control" id="trackInput" placeholder="Enter track name" value={this.state.name} onChange={this._handleInput}/>
//         </div>
//         <button type="submit" className="btn btn-primary">Add a Track</button>
//       </form>
//     );
//   }
// }
//
// export default TrackForm;
