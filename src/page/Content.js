import '../styles/HistoryDisplay.css';
import '../styles/TopDisplay.css';
import React, {useEffect, useState } from 'react';
import {getAll, deleteID} from '../gateway';
import uniqid from 'uniqid';



const Content = () =>{  
    const [dbData, setDbData] = useState([]);  
    //force a rerender
    const [force, setForce] = useState(Math.random());
    const CreateHistoryCard = () =>{

        let cardData = [];
        //creates the memory cards
        for(let i = 0; i<dbData.length; i++){
            const dbDate = dbData[i].date.substring(0,10);
            cardData.push({key:dbData[i]._id, price:dbData[i].price, name:dbData[i].name, email:dbData[i].email, date:dbDate});
        }
        const deleteCard = (e) =>{   
            deleteID(e.target.id);
            setForce(Math.random());
        }
        const children = cardData.map((val)=>(
            React.createElement('div', {className: 'history-card', key: uniqid(), id: val["key"]},
                React.createElement('div', {className: 'history-card-price', key: uniqid()},val['price']),
                React.createElement('div', {className: 'history-card-name', key: uniqid()},val['name']),
                React.createElement('div', {className: 'history-card-email', key: uniqid()},val['email']),
                React.createElement('div', {className: 'history-card-date', key: uniqid()},val['date']),
                React.createElement('button', {type: 'button', className: 'history-card-delete', key: uniqid(), id:val["key"], onClick:deleteCard })
            )
        ));
        return children;
    }

    const CreateTopCard = () =>{

        let cardData = [];
        let topNames = [];
        let topPrices = [];
        let topEmail = [];
        //creates the memory cards
        for(let i = 0; i<dbData.length; i++){
            if(topNames.includes(dbData[i].name) && topEmail.includes(dbData[i].email)){
                for(let j = 0; j<topNames.length; j++){
                    if((dbData[i].name === topNames[j]) && dbData[i].email === topEmail[j]){
                        topPrices[j] += dbData[i].price;
                    }
                }
            }else{
               topNames.push(dbData[i].name);
               topEmail.push(dbData[i].email);
               topPrices.push(dbData[i].price); 
            }
        }

        for(let i = 0; i<topNames.length; i++){
            cardData.push({key: i, price:topPrices[i], name: topNames[i], email: topEmail[i]});
        }
        cardData.sort((a,b)=> b.price - a.price);
        const children = cardData.map((val)=>(
            React.createElement('div', {className: 'top-card', key: uniqid()},
                React.createElement('div', {className: 'top-card-price', key: uniqid()},val['price']),
                React.createElement('div', {className: 'top-card-name', key: uniqid()},val['name'])
            )
        ));
        return children;
    }

    const fetchData = async()=>{
        const tempData = await(getAll());
        setDbData(tempData);
    }
    const refreshPage = () =>{
        setForce(Math.random());
    }
    useEffect(()=>{
        fetchData();
    
  },[force]);
  return(
    React.createElement('div', {className: 'content'}, 
    React.createElement('div', {className: 'top-display'}, CreateTopCard()), 
    React.createElement('div', {className: 'history-display'}, CreateHistoryCard()),
    React.createElement('button',{type:'button',className: 'refresh-btn', onClick:refreshPage}) 
    )
  )
};

export default Content;