import React from 'react';

function Navbar(props) {
    let navItems = [
        <li key={1}>
            <a href="/">Home</a>
        </li>,
        <li key={2}>
            <a href="/memorial">Memorial</a>
        </li>
    ];
    if (props.isLoggedIn) {
        navItems.push(
            <li key={3}>
                <a href="/comics">Comics</a>
            </li>
        );
        navItems.push(
            <li key={4}>
                <a href="/logout">Log Out</a>
            </li>
        )
    } else {
        navItems.push(
            <li key={5}>
                <a href="/Sign Up">Sign Up</a>
            </li>
        );
        navItems.push(
            <li key={6}>
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