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
  },
  {
    id: 4,
    state: "TODO",
    priority: "medium",
    title: "todo 4",
    description: "",
    createAt: "16/02/24 19:35:02",
    completedAt: ""
  },
  {
    id: 5,
    state: "WIP",
    priority: "low",
    title: "Todo 5",
    description: "",
    createAt: "16/02/24 19:41:12",
    completedAt: ""
  },
  {
    id: 6,
    state: "DONE",
    priority: "medium",
    title: "Todo 6",
    description: "",
    createAt: "16/02/24 19:50:02",
    completedAt: "16/02/24 19:56:30"
  },
  {
    id: 7,
    state: "TODO",
    priority: "low",
    title: "todo 7",
    description: "",
    createAt: "16/02/24 20:35:02",
    completedAt: ""
  },
  {
    id: 8,
    state: "WIP",
    priority: "high",
    title: "Todo 8",
    description: "",
    createAt: "16/02/24 20:41:12",
    completedAt: ""
  },
  {
    id: 9,
    state: "DONE",
    priority: "high",
    title: "Todo 9",
    description: "",
    createAt: "16/02/24 20:50:02",
    completedAt: "16/02/24 20:56:30"
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

  function ordenarPorPrioridadFecha(array) {
    const prioridades = {
      high: 1,
      medium: 2,
      low: 3,
    };
  
    return array.sort((a, b) => {
      const prioridadA = prioridades[a.priority];
      const prioridadB = prioridades[b.priority];
  
      // Ordenar por prioridad
      if (prioridadA !== prioridadB) {
        return prioridadA - prioridadB;
      }
  
      // Si las prioridades son iguales, ordenar por fecha de creación
      const fechaA = new Date(a.createAt).getTime();
      const fechaB = new Date(b.createAt).getTime();
      return fechaA - fechaB;
    });
  }
  
  const sortedState = ordenarPorPrioridadFecha(todos);

  const states = sortedState.reduce((acc, item) => {
    // Agregar el item al array correspondiente a su estado
    acc[item.state].push(item);
    return acc;
  }, {
    TODO: [],
    WIP: [],
    DONE: [],
  })
  
  


  return (
    <>
      
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      
      <Header />

      <main  className="container mx-auto  mt-8">
        
        <TodoCreate createTodo={createTodo}/>
        

      </main>
      <TodoList todos={states}/>
     
      <TodoComputed />

      <section className="text-center mt-8 text-gray-400 font-semibold">Drag an drop to reorder list</section>
    </div>
    </>
  )
}

export default App