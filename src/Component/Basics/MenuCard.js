import React from 'react';

function MenuCard({prop}) {
    return (
        <>
            <section className="main-card--cointainer"  >
                {
                prop.map((curElement) => {  // curElement ko use kar raha ha bar bar iski jaga hm isko destructor kar dega
                 
                   //const { id ,image, name, category, description, price} = curElement; // This is known as destructor karna curElement ko
                    
                   return (
                
                            <div className="card-container" key={curElement.id} >
                                <div className="card" >
                                    <div className="card-body" >
                                        <span className="card-number card-circle subtle">{curElement.id}</span>
                                        <span className="card-author subtle">{curElement.category}</span>
                                        <h2 className="card-title">{curElement.name}</h2>
                                        <span className="card-description subtle">{curElement.description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={curElement.image} alt="images" className="card-media" /> 
                                    <span className="card-tag subtle">Order Now</span>
                                    <span className="card-price subtle">{curElement.price}</span>
                                </div>
                            </div>
                       
                    );
                })}
            </section>
        </>
    );
}

export default MenuCard;
