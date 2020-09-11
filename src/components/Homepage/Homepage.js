import React from "react";
import './Homepage.css';

const Background =
	"https://previews.123rf.com/images/yayasyaya/yayasyaya1605/yayasyaya160500007/58039643-comic-book-page-divided-by-lines-with-speech-bubbles-rocket-hero-and-sounds-effect-retro-background-.jpg";


function Homepage(props) {
	return (
		<body>
			<h1 style={{ textAlign: "center" }}>Welcome to SuperWiki!</h1>
			<div className="welcome-screen">
				<div className="welcome">
					<p>
						Well, here you have all things SUPER!
						<br />
						Introducing the SuperWiki! The ultimate wiki for the best
						superheroes ever created. We have every Marvel comic known to man
						listed HERE.
						<br />
						All you need to do is sign up, browse Marvel's extensive comic
						catalog, and add them to your favorites!
					</p>

					<p className={props.isLoggedIn ? "hidden" : ""}>
						<a href="/signup">Sign Up</a> or <a href="/login">Log In</a>
					</p>
				</div>
			</div>
		</body>
	);
}

export default Homepage;
