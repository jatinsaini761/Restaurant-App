import React,{useState,useEffect} from 'react';


function UseState() {
  const intialdata = 15;
  const [data, setdata] = useState(intialdata);

  useEffect(() => {
    document.title = `Chats(${data})`;
  });

  return (
    <>
      <div className="center">
        <p>{data}</p>
        <div className="button2" onClick={()=> setdata(data+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        
        <div className="button2" onClick={()=> data > 0 ? setdata(data-1) : setdata(0)}>
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

export default UseState;
