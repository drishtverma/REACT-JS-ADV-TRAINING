import React from "react";
class ParentChild extends React.Component {
    constructor() {
      super();
      this.handleData = this.handleData.bind(this);
      this.state = {
        fromChild: ''
      };
    }
    
    handleData(data) {
      this.setState({
        fromChild: data
      });
    }
    
    render() {
      return (
        <div>
          <InputFoo handlerFromParant={this.handleData} /> 
          <h5>Received by parent:<br />{this.state.fromChild}</h5>
        </div>
      );
    }
  }
  
  
  class InputFoo extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        inputField: ''
      };
    }
    
    submitHandler(evt) {
     
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
      this.props.handlerFromParant(this.state.inputField);
      
      this.setState({
        inputField: ''
      });
      evt.preventDefault();
    }
    
    handleChange(event) {
        console.log("handle change")
      this.setState({
        inputField: event.target.value
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" 
                   id="theInput" 
                   value={this.state.inputField} 
                   onChange={()=>this.handleChange} />
            <input type="submit" />
          </form>
          <h5>Visible in child:<br />{this.state.inputField}</h5>
        </div>
      );
    }
  }
  
 export default ParentChild;