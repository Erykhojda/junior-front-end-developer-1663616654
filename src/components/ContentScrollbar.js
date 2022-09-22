import React from "react";
import classes from "./ContentScrollbar.module.css";

const ContentScrollbar = ({ value, setViewerController }) => {
	
	return (
		<div className={classes.contentScrollbar}>
			<div
				className={value === "One" ? classes.itemFocus : classes.itemNew}
				onClick={() => setViewerController("One")}
			>
				<span
					className={
						value !== "One"
							? classes["newMessage"]
							: classes["newMessageVisited"]
					}
				>
					new
				</span>
				<span className={classes.item__Span}>Olga Nelson &#x2022; Dec 17</span>
				<h5
					className={
						value !== "One" ? classes["newTitle"] : classes["item__title"]
					}
				>
					New sprintm tasks and intro information
				</h5>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
					eveniet quae tenetur voluptates veritatis nemo sit amet...
				</p>
			</div>
			<div
				className={value === "Two" ? classes.itemFocus : classes.itemVisited}
				onClick={() => setViewerController("Two")}
			>
				<span className={classes.item__Span}>
					kirsten Aniston &#x2022; Dec 17
				</span>
				<h5 className={classes.item__Title}>
					Application has been accepted 🎉🙌
				</h5>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
					eveniet quae tenetur voluptates veritatis nemo sit amet...
				</p>
			</div>
			<div
				className={value === "Three" ? classes.itemFocus : classes.itemVisited}
				onClick={() => setViewerController("Three")}
			>
				<span className={classes.item__Span}>Olga Nelson &#x2022; Dec 17</span>
				<h5 className={classes.item__Title}>
					New sprintm tasks and intro information
				</h5>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
					eveniet quae tenetur voluptates veritatis nemo sit amet...
				</p>
			</div>
		</div>
	);
};

export default ContentScrollbar;
