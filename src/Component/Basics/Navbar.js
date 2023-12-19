import React from 'react';


function Navbar({filter_func,menuList}) {
  return (
    <>
       <nav className="navbar" >
        {
            menuList.map((curElement,i)=>{
                return(
                    <button className="btn-group__item"  onClick={()=>filter_func(curElement)} key={i}>{curElement}</button>
                );
            })
        }
    </nav>
    </>
  );
}

export default Navbar;
