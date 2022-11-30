import React from 'react';


export const NavBar = () =>{
    return(
    <>
        <nav>
        <ul>
       <Link className = "index-link" to="/"></Link>
        <Link className = "home-link" to="/">Home</Link>
         
        </ul>
        
        </nav>
        
        
        </>
    )
}
