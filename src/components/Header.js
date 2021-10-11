import React from "react"
import profilePic from '../assets/img/vhoc.jpg'

const Header = () => {

    return(

        <>
            <header className="App-header shadow">
                <h2>Victor Olvera</h2>
                <p>IT Admin | Programmer</p>
            </header>
            <img src={profilePic} className="Profile-pic" alt="Victor Olvera"/>
        </>

    )

}

export default Header