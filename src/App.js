import React, { useState, useMemo, useEffect } from 'react'
//import './App.scss'
import style from './App.module.scss'
import CreateModal from './components/modals/CreateModal'
import TasksList from './components/TasksList'
import ComplitedTasksList from './components/CompletedTasksList'

function App() {
	const [tasks, setTasks] = useState([{ time: '06:00', title: 'Wake up' }, { time: '07:30', title: 'Take a dinner' }, { time: '08:00', title: 'Learn React' }])
	const [tasksCompleted, setTasksCompleted] = useState([{ time: '10:00', title: 'Complete homework' }, { time: '11:25', title: 'Search job' }])
	const [task, setTask] = useState({ time: '00:00', title: '' })
	const [modalActive, setModalActive] = useState(false)

	const addNewTask = e => {
		e.preventDefault()
		setTasks([...tasks, { ...task, id: task.title }])
		setModalActive(false)
		setTask({ time: '00:00', title: '' })
	}

	const sortedTasks = useMemo(() => {
		return [...tasks].sort((a, b) => a['time'].localeCompare(b['time']))
	}, [tasks])
	const sortedCompletedTasks = useMemo(() => {
		return [...tasksCompleted].sort((a, b) =>
			a['time'].localeCompare(b['time'])
		)
	}, [tasksCompleted])

	const completePost = task => {
		setTasks(tasks.filter(t => t.title !== task.title))
		setTasksCompleted([
			...tasksCompleted,
			{ time: task.time, title: task.title },
		])
	}

	const removeCompletedPost = completedTask => {
		setTasksCompleted(
			tasksCompleted.filter(t => t.title !== completedTask.title)
		)
	}

	//Time
	const [time, setTime] = useState(new Date().toLocaleTimeString())
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className={style.app}>
			<div className={style.body}>
				<svg
					className={style.createBottom}
					onClick={() => setModalActive(true)}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					class='w-10 h-10'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<div className={style.time}>{time}</div>

				<header className={style.header}>
					<h1>ToDo</h1>
				</header>

				<div className={style.wrapper}>
					<TasksList tasksList={sortedTasks} complete={completePost} />

					<ComplitedTasksList
						tasksList={sortedCompletedTasks}
						remove={removeCompletedPost}
					/>
				</div>
			</div>

			{/* MODAL WINDOW */}
			<CreateModal active={modalActive} setActive={setModalActive}>
				<div className={style.createBody}>
					<form>
						<div className={style.createBody__inputs}>
							<input
								type='time'
								value={task.time}
								placeholder='Time'
								className={style.createBody__time}
								onChange={e => setTask({ ...task, time: e.target.value })}
							/>
							<input
								autofocus
								type='text'
								value={task.title}
								placeholder='Task'
								className={style.createBody__title}
								onChange={e => setTask({ ...task, title: e.target.value })}
							/>
						</div>
						<button className={style.createBody__button} onClick={addNewTask}>
							CREATE
						</button>
					</form>
				</div>
			</CreateModal>
		</div>
	)
}

export default App
