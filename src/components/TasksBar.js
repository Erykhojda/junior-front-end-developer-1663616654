import React from "react";
import classes from "./TasksBar.module.css";
import Task from "./Task";

const TasksBar = () => {
	return (
		<div>
			<div className={classes.tasksbar_header}>
				<h5>your tasks</h5>
			</div>
			<div className={classes.tasksbar}>
				<Task/>
			</div>
		</div>
	);
};
export default TasksBar;
