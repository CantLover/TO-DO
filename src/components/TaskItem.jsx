import React from 'react'
import classes from './TaskItem.module.scss'

const TaskItem = props => {
	return (
		<div className={classes.task}>
			<span className={classes.task__time}>{props.time}</span>
			<div className={classes.task__title}>{props.title}</div>
			<button
				className={classes.task__complete}
				onClick={() => {
					props.complete(props.task)
				}}
			></button>
		</div>
	)
}

export default TaskItem
