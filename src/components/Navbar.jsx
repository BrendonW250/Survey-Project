import React from 'react'

function Navbar(props){
    console.log(props)
    return(
        <div className='some'>
            <h1>Welcome to the website {props.item.name}!</h1>
        </div>
    )
}

export default Navbar;