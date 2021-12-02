import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	currentSong,
	isPlaying,
	setIsPlaying,
	setCurrentSong,
	setSongs,
}) => {
	const activeLibraryHandler = (nextSong) => {
		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
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
	};
	//Event Handler
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};
	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};
	const dragHandler = (e) => {
		//input的value 涉及audioRef和songInfo.currentTime两个元素
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};
	const skipTrackHandler = async (direction) => {
		// let currentIndex = songs.indexOf(currentSong);
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		// console.log(`Current Index: ${currentIndex}`);
		if (direction === "skip-forward") {
			// setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			// console.log(currentIndex + 1);
			// console.log((currentIndex + 1) % songs.length);
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		} else {
			await setCurrentSong(
				songs[(currentIndex - 1 + songs.length) % songs.length]
			);
			activeLibraryHandler(
				songs[(currentIndex - 1 + songs.length) % songs.length]
			);
		}
		if (isPlaying) {
			audioRef.current.play();
			return;
		}
	};
	//Add the styles
	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`,
	};
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<div
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
					className="track"
				>
					<input
						min={0}
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						type="range"
						onChange={dragHandler}
					/>
					<div style={trackAnim} className="animate-track"></div>
				</div>
				<p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-back")}
					// use arrow function to invoke the function, rather than running it instantly
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler("skip-forward")}
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
		</div>
	);
};

export default Player;
