// import React from 'react'

// const Show = () => {

//     toggle = () => this.setState((currentState) => ({show: !currentState.show}));

    
//   return (
//     <div>Show</div>
//   )
// }

// export default Show



class Toggle extends React.Component {
    state = {
      show: true,
    }
  
      toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  
    render() {
      return (
        <div>
                <button onClick={this.toggle}>toggle: {this.state.show ? 'show' : 'hide'}</button>    
          {this.state.show && <div>Hi there</div>}
            </div>
       );
    }
  }
  

 
  
  
    