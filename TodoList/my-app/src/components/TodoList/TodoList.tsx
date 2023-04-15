import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
import styles from './todoList.module.scss'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name: name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])

    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodosObj = [...todosObj, todo]
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }

  const handleOnChangeCheckbox = (id: string, doneTask: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return { ...todo, done: doneTask }
        return todo
      })
    })
  }

  const doneTodosTask = todos.filter((todo) => !todo.done)
  const notDoneTodosTask = todos.filter((todo) => todo.done)

  const findTodoById = (idTodo: string) => {
    const findTodoByIdTask = todos.find((todo) => todo.id === idTodo)
    findTodoByIdTask && setCurrentTodo(findTodoByIdTask)
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name: name }
      return null
    })
  }

  const finishTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) return currentTodo as Todo
        else return todo
      })
    })
    setCurrentTodo(null)
  }

  const deleteTodo = (idTodo: string) => {
    const filterById = todos.filter((todo) => todo.id !== idTodo)
    setTodos(filterById)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishTodo} />
        <TaskList
          todos={doneTodosTask}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          findTodoById={findTodoById}
          deleteTodo={deleteTodo}
        />
        <TaskList
          todos={notDoneTodosTask}
          handleOnChangeCheckbox={handleOnChangeCheckbox}
          findTodoById={findTodoById}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
