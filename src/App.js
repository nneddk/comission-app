import './styles/App.css';
import Content from './page/Content';
import AddWindow from './page/AddWindow';
import React, {useEffect, useState } from 'react';
import uniqid from 'uniqid';
const App= () =>{   
    const [windowActive, toggleWindowActive] = useState(false); 
    const [force, setForce] = useState(Math.random());
    function generateChildren(){
      
      const addData = () =>{
        setForce(Math.random());
        toggleWindowActive(!windowActive);
      }
      const children = [
        React.createElement('div', {className: 'content', key:uniqid()}, Content(),
          React.createElement('div', {className: 'toolbar', key:uniqid()},
          React.createElement('button', {onClick:showRawDb, key: uniqid()}, "db"),
          React.createElement('button', {onClick:addData, key: uniqid()}, "+")
          )
        )
        
      ];
      const childrenActive = [
        React.createElement('div', {className: 'add-window', key: uniqid()},<AddWindow/>,
        React.createElement('div', {className: 'toolbar', key:uniqid()},
          React.createElement('button', {onClick:showRawDb, key: uniqid()}, "db"),
          React.createElement('button', {onClick:addData, key: uniqid()}, "+")
          )
        )
        
        
      ];
      
  
      
      return (windowActive)?childrenActive:children;
    }
    let appChild = generateChildren();
    const showRawDb = () =>{
      appChild = generateChildren();
    }
    
    useEffect(()=>{
  },[force]);
  return(
    React.createElement('div', {className: 'App'}, appChild)
  )
};

export default App;
