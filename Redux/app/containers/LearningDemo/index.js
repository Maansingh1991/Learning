import React from 'react';
import { connect } from 'react-redux';
import {printText,demoApiCall} from './action';
import {apiCall} from "./saga";
import axios from 'axios';
import history from '../../utils/history';
import worker from '../../demoWorker';
import { useState,useEffect } from 'react';



const context= React.createContext();



//Custom hooks
const useCustomEffect = value =>{
  useEffect(()=>{
    document.title = value;

  },[value]);
}


function CloneExample(props){


  return <div><p>Inside component</p><div><p>length{props.children.length}</p>
  
  
  
  {React.Children.map(props.children , child =>{
    
    
    return  React.cloneElement(child,{onClick: props.onClick })})}
  
  
  </div></div>
}

function Component1(){


  return <context.Consumer>
      {(value)=>(<p>Is is it true it works {value} </p>)}
    
  </context.Consumer>
}



function DemoComponent() {
  // Declare a new state variable, which we'll call "count"
   const [count, setCount] = useState(0);
   const [fruit, setFruit] = useState('banana');
   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
   useCustomEffect(count);
  



  return (
    <context.Provider value={count}>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div>

      <input type="text" name="ex2" onChange={(event)=>setFruit(event.target.value)}></input>
      {JSON.stringify(fruit)}
      
      </div>
     

<Component1></Component1>
    </div>




    <CloneExample onClick={()=>{console.log("clicked")}}><button name="1" value="1">1</button>
    <button name="2" value="2">2</button>
    <button name="3" value="3">3</button></CloneExample>


    
    </context.Provider>
  );
}


 export default connect()(DemoComponent);



 /**
  * <provider>
  * <a>
  *   <b>
  * 
  *    <c>
  *     </e consumer>
  * </c>
  * <d></d>
  * 
  * </b>
  * 
  * 
  * 
  * 
  * 
  * </a>
  * 
  * 
  * 
  * 
  * 
  */