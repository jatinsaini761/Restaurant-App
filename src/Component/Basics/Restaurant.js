import React from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElement)=>{
    return curElement.category;
})),"All",];   // unique data paana ka liya new set ka use kiya jata ha 
// three dot ... spread operator which shows the array  replce with the object

console.log(uniqueList);

const Restaurant = ()=> {
  const [menudata,setmenudata] = React.useState(Menu); //compulsory to write hooks there no placed this any other position
  // console.log(menudata);
  const [menuList,setmenuList] = React.useState(uniqueList);

  const filter_func = (category)=>{
    
    if(category === "All")
    { 
      setmenudata(Menu);
      return;
    }
    const Update_list = Menu.filter((curElement)=>{
      return curElement.category === category;
    })
     setmenudata(Update_list);
  };
  return (
    <>
    <Navbar filter_func={filter_func} menuList={menuList}/>
    <MenuCard prop={menudata}/>
    </>
  );
}

export default Restaurant;
