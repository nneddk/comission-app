import React, {Component} from 'react';
import { post } from '../gateway';
class AddWindow extends Component{
  constructor(){
    super();


    this.state = {
        price:"",
        name:"",
        email:""
    }
  }
  //im sorry for anyone that sees this
  handleChange = (e) =>{

    switch(e.target.id){
        case 'price':
            this.setState({
                price:e.target.value,
                name: this.state.name,
                email:this.state.email
            });
            break;
        case 'full-name':
            this.setState({
                price:this.state.price,
                name: e.target.value.toUpperCase(),
                email:this.state.email
            });
            break;
        case 'email':
            this.setState({
                price:this.state.price,
                name:this.state.name,
                email:e.target.value
            });
            break;
        default:
        break;
    }

  };
  postData = (e) =>{
    e.preventDefault();
    post(this.state);
    this.setState({price:"",
    name:"",
    email:""});
  }
  render(){
    return(
        <div className='Form'>
        <form onSubmit={this.postData} className='form-div'>
            <input className='input-box' onChange={this.handleChange} type = 'number' id = 'price' autoComplete ='off' required value ={this.state.price}placeholder='Input Price'></input>
          <input className='input-box' onChange={this.handleChange} type = 'text' id = 'full-name' autoComplete ='off' required value ={this.state.name}placeholder='Name'></input>
          <input className='input-box' onChange={this.handleChange} type = 'email' id = 'email' autoComplete='off' required value ={this.state.email}placeholder ='Email'></input>
          <button type = 'submit'>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddWindow;