import React from 'react'
import classes from './CompletedTasksList.module.scss'
import CompletedTaskItem from './CompletedTaskItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const TasksList = ({ tasksList, remove }) => {
	return (
		<div className={classes.tasks}>
			<TransitionGroup>
				{tasksList.map(completedTask => (
					<CSSTransition
						key={completedTask.title}
						timeout={500}
						classNames='task'
					>
						<CompletedTaskItem
							time={completedTask.time}
							title={completedTask.title}
							task={completedTask}
							remove={remove}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default TasksList
