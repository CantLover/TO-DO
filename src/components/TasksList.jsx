import React from 'react'
import classes from './TasksList.module.scss'
import TaskItem from './TaskItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TasksList = ({ tasksList, complete }) => {
	return (
		<div className={classes.Tasks}>
			<TransitionGroup>
				{tasksList.map(task => (
					<CSSTransition key={task.title} timeout={500} classNames='task'>
						<TaskItem
							time={task.time}
							title={task.title}
							complete={complete}
							task={task}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default TasksList
