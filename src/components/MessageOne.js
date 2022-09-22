import React from "react";
import classes from "./MessageOne.module.css";
import photo from "../../src/image/photo.png";

const MessageOne = () => {
	return (
		<div className={classes.ContentWrapper}>
			<h2>New sprint, tasks and intro information.</h2>
			<div className={classes.image}>
				<img src={photo} alt="pt" />
			</div>
			<div className={classes.textWrapper}>
				<span>Olga Nelson</span> &#x2022;
				<span> Dec 17 December &#x2022; 11:20</span>
				<p>Hi!</p>
				<p>
					My name is Kirsten, and I'm super happy to announce that your
					application to join Coders Family has been accepted! 🎉 🙌
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
					architecto natus cumque esse ex sed porro aliquid nostrum quidem nobis
					cum eius libero iusto recusandae cupiditate unde odio voluptas
					reprehenderit.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
					architecto natus cumque esse ex sed porro aliquid nostrum quidem nobis
					cum eius libero iusto recusandae cupiditate unde odio voluptas
					reprehenderit.
				</p>
			</div>
		</div>
	);
};
export default MessageOne;
