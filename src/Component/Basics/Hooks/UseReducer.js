import React,{useState,useEffect,useReducer} from 'react';

const reducer = (state,action)=>{
    if(action.type === "INCR")
    state = state+1;

    if(state > 0 && action.type === "DECR")
    state = state-1;
    
     return state;
}


function UseReducer() {
//   const intialdata = 15;
//   const [data, setdata] = useState(intialdata);

//   useEffect(() => {
//     document.title = `Chats(${data})`;
//   });

     const intialData = 20;
     const [state,dispatch]  = useReducer(reducer,intialData);
 
  return (
    <>
      <div className="center">
        <p>{state}</p>
        <div className="button2" onClick={()=> dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        
        <div className="button2" onClick={()=> dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
}

export default UseReducer;
