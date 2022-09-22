import React from "react";
import classes from "./Task.module.css";
import { Link, useLocation } from "react-router-dom";

const Task = () => {
	const location = useLocation();

	const pathName = location.pathname;

	return (
		<div>
			<ul className={classes.list}>
				<li>
					<Link className={pathName === '/' ? classes.active : classes.notActive} to="/"> Application Setup </Link>
				</li>
				<li>
					<Link className={pathName === '/books' ? classes.active : classes.notActive} to="/books"> Static Books List</Link>
				</li>
				<li>
					<Link  className={pathName === '/admin' ? classes.active : classes.notActive} to="/admin">Administration Panel</Link>
				</li>
				<li>
					<Link  className={pathName === '/connect' ? classes.active : classes.notActive} to="/connect">Connect Admin with Frontend</Link>
				</li>
				<li>Book Review Feature</li>
			</ul>
		</div>
	);
};

export default Task;
