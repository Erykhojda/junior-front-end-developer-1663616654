import React, { useState } from "react";
import classes from "./ContextContainer.module.css";
import MessageOne from "./MessageOne";
import MessageTwo from "./MessageTwo";
import MessageThree from "./MessageThree";
import ContentScrollbar from "./ContentScrollbar";

import nav from "../image/nav.png";

const ContextContainer = () => {
	const [viewerController, setViewerController] = useState("Two");

	// console.log(viewerController)

	const resolveContent = (viewerController) => {
		switch (viewerController) {
			case "One":
				return <MessageOne />;
			case "Two":
				return <MessageTwo />;
			case "Three":
				return <MessageThree />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className={classes.header}>
				<span>
					<img src={nav} alt="nav" />
				</span>
				<h5>Businnes context</h5>
			</div>
			<div className={classes.contextContainer}>
				<ContentScrollbar
					value={viewerController}
					setViewerController={setViewerController}
				/>

				{resolveContent(viewerController)}
			</div>
		</div>
	);
};

export default ContextContainer;
