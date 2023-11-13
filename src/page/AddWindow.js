import React, {Component} from 'react';
import { post } from '../gateway';
import '../styles/AddWindow.css';
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
        <div className='add-form'>
        Add Comission
        <form onSubmit={this.postData} className='form-div'>
            <div className='input-text'>
                <input className='input-box' onChange={this.handleChange} type = 'number' id = 'price' autoComplete ='off' required value ={this.state.price}></input>
                <label className='price-label'for = 'price'>Price</label>
            </div>
            <div className='input-text'>
                <input className='input-box' onChange={this.handleChange} type = 'text' id = 'full-name' autoComplete ='off' required value ={this.state.name}></input>
                <label className='name-label'for = 'full-name'>Name</label>
            </div>
            <div className='input-text'>
                <input className='input-box' onChange={this.handleChange} type = 'email' id = 'email' autoComplete='off' required value ={this.state.email}></input>
                <label className='email-label' for = 'email'>Email</label>
            </div>
            
            
            <button type = 'submit' className='submit-btn'>+</button>
        </form>
      </div>
    );
  }
}
export default AddWindow;