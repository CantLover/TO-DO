import React from 'react'
import classes from './CompletedTaskItem.module.scss'

const TaskItem = props => {
	return (
		<div className={classes.compTask}>
			<span className={classes.compTask__time}>{props.time}</span>
			<div className={classes.compTask__title}>{props.title}</div>
			<button
				className={classes.compTask__complete}
				onClick={() => props.remove(props.task)}
			></button>
		</div>
	)
}

export default TaskItem
