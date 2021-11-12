import React from 'react';
import logo from "./logo.svg";
import './App.css';

class App extends React.Component{
  
   constructor(props){
  super(props);
  this.state = {
    newItem: "",
    list : []
    }
   }
 
  addItem(todovalue){
    if(todovalue !== ""){
      const newItem ={
        id : Date.now(),
        value : todovalue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !==id);
    this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem: input})
  }

  render(){
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">Krish's ToDo APP</h1>
        <div className="container"> 
        Add an Item....
        <br/>
        <br/>

        <input
        type="text"
        className="input-text"
        placeholder="write a Todo"
        required
        value= {this.state.newItem}
        onChange ={e=> this.updateInput(e.target.value)}
        />

        <button className="add-btn" 
        onClick= {() => this.addItem(this.state.newItem)}
        disabled = {!this.state.newItem.length}
        >Add Todo</button>
        <div className="list">
          <ol>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
              <input 
              type="checkbox"
              name="isDone"
              checked={item.isDone}
              onChange = {()=>{}}
              />
              {item.value}
              <button
              className="btn"
              onClick={()=> this.deleteItem(item.id)}
              >Delete</button>
              </li>
            )
          })}
            <li>
              <input type="checkbox" name="" id=""/>
              
              <button className="btn"> Delete</button>
            </li>
          </ol>
        </div>
        </div>
      </div>
    )
  }

}

export default App;