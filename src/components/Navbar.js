import React from 'react';

function Navbar(props) {
    let navItems = [
        <li key={1}>
            <a href="/homepage">Home</a>
        </li>
    ];
    if (props.isLoggedIn) {
        navItems.push(
            <li key={2}>
                <a href="/logout">Log Out</a>
            </li>
        );
    } else {
        navItems.push(
            <li key={3}>
            <a href="/Sign Up">Sign Up</a>
        </li>
        );
        navItems.push(
            <li key={4}>
            <a href="/login">Log In</a>
        </li>
        );
    }

    return (
        <>
            <h1>SuperWiki</h1>
            <nav>
                <ul>{navItems}</ul>
            </nav>
        </>
    )

}

export default Navbar;