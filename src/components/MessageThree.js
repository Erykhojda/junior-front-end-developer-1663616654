import React from "react";
import classes from "./MessageOne.module.css";
import photo from "../../src/image/photo.png";

const MessageThree = () => {
	return (
		<div className={classes.ContentWrapper}>
			<h2>New sprint, tasks and intro information.</h2>
			<div className={classes.image}>
				<img src={photo} alt="pt" />
			</div>
			<div className={classes.textWrapper}>
				<span>Olga Nelson</span> &#x2022;
				<span> Dec 17 December &#x2022; 11:20</span>
				<p>Welcome!</p>
				<p>
					My name is Kirsten, and I'm super happy to announce that your
					application to join Coders Family has been accepted! 🎉 🙌
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
					autem similique modi inventore aliquam nostrum tempore laudantium
					omnis neque voluptas nobis fugit, maxime ducimus illo quas ea vero
					ipsam nemo!
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
					autem similique modi inventore aliquam nostrum tempore laudantium
					omnis neque voluptas nobis fugit, maxime ducimus illo quas ea vero
					ipsam nemo!
				</p>
			</div>
		</div>
	);
};
export default MessageThree;
