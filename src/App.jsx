import { useState } from "react"
import Header from "./components/Header"
import TodoComputed from "./components/todos/TodoComputed"
import TodoCreate from "./components/todos/TodoCreate"
import TodoList from "./components/todos/TodoList"

const initialState = [
  {
    id: 1,
    state: "TODO",
    priority: "high",
    title: "Complete js curse",
    description: "",
    createAt: "15/02/24 19:35:02",
    completedAt: ""
  },
  {
    id: 2,
    state: "WIP",
    priority: "medium",
    title: "Other todo 2",
    description: "",
    createAt: "15/02/24 19:41:12",
    completedAt: ""
  },
  {
    id: 3,
    state: "DONE",
    priority: "low",
    title: "Other todo 3",
    description: "",
    createAt: "15/02/24 19:50:02",
    completedAt: "15/02/24 19:56:30"
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialState)
  const newDate = new Date();
  const newDateStr = newDate.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const hourStr = newDate.toLocaleTimeString('es-AR', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

const newDateComplete = `${newDateStr} ${hourStr}`;

  const createTodo = (title,  priority) => {
    const newTodo = {
      id: todos.length + 1,
      state: "TODO",
      title: title.trim(),
      priority,
      description: "",
      createAt: newDateComplete,
      completedAt: ""
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      
      <Header />

      <main  className="container mx-auto px-4 mt-8">
        
        <TodoCreate createTodo={createTodo}/>
        
        <TodoList todos={todos}/>
        
        <TodoComputed />

      </main>

      <section className="container mx-auto px-4">
        <div className="bg-white rounded-md mt-8 p-4 flex justify-center gap-4">
          <button className=" hover:text-blue-700 text-gray-600 font-semibold">All</button>
          <button className=" hover:text-blue-700 text-gray-600 font-semibold">Active</button>
          <button className=" hover:text-blue-700 text-gray-600 font-semibold">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8 text-gray-400 font-semibold">Drag an drop to reorder list</section>
    </div>
  )
}

export default App