import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<nav>
			<h1>Waves</h1>
			<h2>妮儿，工作累了，听点🎵吧 :p</h2>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default Nav;
