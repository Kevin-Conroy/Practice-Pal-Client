import React from "react";
import { BrowserRouter, Link } from "react-router-dom"

function Welcome () {
    return (
        <main>
            <div>
                <h3>Meet Your Practice Pal</h3>
                <h5>
                Welcome to practice pal! Let's face it, sometimes life gets in the way of practicing your instrument. 
                It's easy to lose track of where you're at! Practice Pal gives you a simple & efficient place
                 to track your progress. Sign up is quick - all you need is a username & password! Let's get practicing...<br></br>
                 <Link to="/profileform"><button>Start my Profile</button></Link><br></br>
                 <Link to="/login"><button>Login</button></Link>

                </h5>
            </div>
        </main>
    )
}
export default Welcome