import React from "react";

const LibrarySong = ({
	song,
	songs,
	setCurrentSong,
	id,
	audioRef,
	isPlaying,
	setSongs,
}) => {
	const songSelectHandler = async () => {
		const selectedSong = songs.filter((state) => state.id === id);
		// console.log(selectedSong);
		await setCurrentSong(selectedSong[0]);
		//Add active state - for highlighting
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				// id represents the element we clicked on
				// song.id represents the song from the state
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);
		// Check if the song is playing
		if (isPlaying) {
			audioRef.current.play();
			return;
		}
	};
	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? `selected` : ""}`}
			// if song.active is True, then add a class selected
		>
			<img alt={song.name} src={song.cover}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
