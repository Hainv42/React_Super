import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'

interface TaskListProps {
  todos: Todo[]
  doneTodos?: boolean
  handleOnChangeCheckbox: (id: string, doneTask: boolean) => void
  findTodoById: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { todos, doneTodos, handleOnChangeCheckbox, findTodoById, deleteTodo } = props

  const OnchangeCheckbox = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleOnChangeCheckbox(id, event.target.checked)
  }

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTodos ? 'Hoàn thành' : 'Chưa Done'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              checked={todo.done}
              className={styles.taskCheckbox}
              onChange={OnchangeCheckbox(todo.id)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => findTodoById(todo.id)}>
                🖊️
              </button>
              <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
