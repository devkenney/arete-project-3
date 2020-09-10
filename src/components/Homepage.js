import React from "react";

function Homepage(props) {
    return (
        <div>
            <h1>Welcome to SuperWiki!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue rutrum leo in elementum. In hac habitasse platea dictumst. Cras molestie quam volutpat maximus pharetra. Suspendisse potenti. Nullam rutrum ornare tortor, at elementum turpis cursus nec. Maecenas sed arcu eget elit feugiat tincidunt molestie eu dui. Curabitur a pellentesque velit. Sed interdum consectetur lectus, vitae blandit diam ultrices sit amet. Donec vestibulum odio quis purus semper ullamcorper. Duis sollicitudin sodales massa ut cursus. Cras scelerisque ipsum ante, varius pharetra elit rhoncus a. Nullam vel mollis turpis. Sed mattis, lorem eget viverra ornare, quam ligula dapibus magna, eget bibendum sem ligula vel enim. Fusce interdum, sem ut imperdiet placerat, tortor tortor tincidunt lectus, sit amet tristique felis lacus ultrices purus. Ut molestie finibus blandit. Nullam vel lorem malesuada, vestibulum tellus eget, mattis ligula.</p>
            <p>Pellentesque varius, felis ut pellentesque scelerisque, dolor neque dapibus lorem, at dictum turpis erat auctor eros. Nullam in nulla imperdiet, bibendum neque ut, fringilla dui. Morbi vel libero libero. Nam quis quam efficitur, luctus ipsum id, varius sem. Sed ullamcorper molestie leo at porta. Integer sem velit, posuere ac nisi eu, consectetur mollis odio. Aenean maximus nibh nec tempus fringilla. In aliquam sem vitae eleifend dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam placerat efficitur turpis, a sollicitudin eros fringilla vitae. Quisque malesuada orci non venenatis porttitor. In elementum tellus vel mauris blandit, non varius turpis auctor. In imperdiet dapibus dignissim. Phasellus pharetra, purus non imperdiet imperdiet, tortor ligula gravida odio, vitae convallis lorem leo at sapien. Nunc a lectus aliquet, luctus nulla eget, efficitur ipsum. Donec sollicitudin nulla sed sem congue, a laoreet ipsum porta.</p>
            <p className={props.isLoggedIn ? "hidden" : ""}><a href='/signup'>Sign Up</a> or <a href='/login'>Log In</a></p>
        </div>
    );
}

export default Homepage;