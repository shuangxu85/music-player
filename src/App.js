import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
//Import Util
import data from "./data";

function App() {
	//Ref ~ 引用
	const audioRef = useRef(null);

	//State
	const [songs, setSongs] = useState(data());
	//~data() return a array of objects
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);

	//Functions for audio
	const timeUpdateHandler = (e) => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		//Calculate Percentage
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			// if duration = duration, then we just put duration alone here
			animationPercentage: animation,
		});
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div className={`App ${libraryStatus ? "library-active" : ""}`}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} />
			<Player
				audioRef={audioRef}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				songs={songs}
				setSongs={setSongs}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				// 一进入网页就执行function
				ref={audioRef}
				src={currentSong.audio}
				// {/* in= src; out=reft */}
				onEnded={songEndHandler}
			></audio>
		</div>
	);
}

export default App;
