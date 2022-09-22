import React from "react";
import classes from "./MessageOne.module.css";
import photo from "../../src/image/photo.png";

const MessageTwo = () => {
	return (
		<div className={classes.ContentWrapper}>
			<h2>Application has been accepted 🎉🙌</h2>
			<div className={classes.image}>
				<img src={photo} alt="pt" />
			</div>
			<div className={classes.textWrapper}>
				<span>Olga Nelson</span> &#x2022;
				<span> Dec 17 December &#x2022; 11:20</span>
				<p>Hello!</p>
				<p>
					My name is Kirsten, and I'm super happy to announce that your
					application to join Coders Family has been accepted! 🎉 🙌
				</p>
				<p>
					You really impressed us during the interview process, and we'd like to
					offer you a project with COMPANY. We've been working with COMPANY for
					quite some time, and it's important for us to keep them satisfied with
					our services — hence why we believe you'll be a great fit for this
					job.
				</p>
				<p>
					Here's the project overview: You'll be responsible for building a
					database and page for recording and displaying book ratings. We'd like
					to work in two week-long sprints, we've already given you a head start
					and prepared your tasks to deliver in your first sprint.
				</p>
			</div>
		</div>
	);
};
export default MessageTwo;
