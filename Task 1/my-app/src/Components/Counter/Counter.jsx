import React from "react";
import './Counter.css'


function Header() {
    return(
        <div className="wrapper">
            <div className="nav">
                <div className="navLeft">OneSchool</div>
                <div className="navMiddle">
                    <ul className="navMiddle--list">
                        <li className="navMiddle--listItem">Home</li>
                        <li className="navMiddle--listItem">Courses</li>
                        <li className="navMiddle--listItem">Programs</li>
                        <li className="navMiddle--listItem">Teachers</li>
                    </ul>
                </div>
                <div className="navRight"><button className="navRight--btn">CONTACT US</button></div>
            </div>
            <div className="main">
                <div className="main--left">
                    <h1 className="main--left--h1">Learn From The Expert</h1>
                    <p className="main--left--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <button className="main--left--button">ADMISSION NOW</button>
                    </div>
                <div className="main--right">
                    <div className="main--right--wrapper">
                        <h3 className="main--right--wrapper--h3">Sign up</h3>
                        <form className="main--right--wrapper--form" action="#">
                            <input className="main--right--wrapper--form--input" type="email" placeholder="Email Adress"/>
                            <input className="main--right--wrapper--form--input" type="password" placeholder="Password"/>
                            <input className="main--right--wrapper--form--input" type="password" placeholder="Re-type Password"/>
                            <button className="main--right--wrapper--form--btn" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header