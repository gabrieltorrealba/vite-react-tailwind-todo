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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, neque similique iusto, omnis consequatur cumque eveniet sequi distinctio quo doloribus odit atque ipsum earum magni laborum deserunt quae repellendus dolor sapiente recusandae sit quasi minus nulla! Blanditiis ducimus fuga quidem illum, consequatur recusandae doloribus corrupti sapiente sunt quasi officiis aliquam repellat maxime sint impedit tempore, assumenda iure voluptatem dolorem. Ab earum sed vel exercitationem modi porro nulla excepturi nam, necessitatibus dolore quibusdam voluptates in! Ipsum possimus ipsa esse porro tempore quos odio quidem! Corporis, maxime dolorem. Eos dolor sequi minima. Mollitia itaque ad iusto corporis nostrum, vitae expedita id numquam quis reiciendis aperiam maxime nisi sapiente veritatis quam totam deserunt ullam ipsa earum in necessitatibus facilis illum. Sunt sapiente, natus excepturi error quos cumque maiores rem dignissimos reiciendis quidem ipsum corporis quae, at minima vero. Deserunt minus, fugiat perferendis, earum consectetur quis accusantium, asperiores nihil sequi eum obcaecati! Dolorum cum laboriosam fuga totam fugit minus id illo sint. Magni voluptates ab hic eos aut natus, inventore adipisci consectetur id repellat delectus necessitatibus culpa sunt, nisi repudiandae eaque praesentium alias illum? Repudiandae esse atque velit nemo tempora, aut sapiente quisquam sit distinctio nam recusandae enim consequuntur in earum et. Consectetur nobis explicabo, praesentium totam, eum in reprehenderit molestiae ipsum blanditiis placeat quas dolore, veritatis consequatur adipisci pariatur maiores! Asperiores sit cum, quae facere magni aliquam voluptatum! Delectus, quo. Saepe libero voluptatem magni ducimus veritatis quam exercitationem, commodi ullam laudantium quidem. Doloribus vel ipsum ipsam obcaecati sint, quasi corrupti officiis dolores. Et ipsum temporibus non voluptatem perferendis dolor molestias accusamus minima assumenda. Doloremque quaerat officiis et iure aspernatur velit nobis, placeat harum quasi, quidem exercitationem. Sit maiores deleniti itaque, libero blanditiis non nesciunt voluptatem repudiandae. Eos beatae repellat voluptatem reprehenderit tempora ex rerum inventore sint doloremque iure eum perspiciatis neque repudiandae illo veritatis, expedita aliquam atque animi sunt accusantium deserunt molestias in hic. Sapiente repellat enim, blanditiis rerum consectetur cupiditate alias aperiam, sit debitis nihil quas officiis assumenda praesentium architecto excepturi, harum magni! Ipsa doloremque officia sed perspiciatis consectetur ab obcaecati vel aspernatur quo, explicabo iste voluptates? Debitis aspernatur reiciendis quibusdam consequuntur laudantium pariatur harum ullam perferendis, distinctio accusantium vero at, incidunt deleniti accusamus, eius fuga modi recusandae quod impedit magnam quas dolorem architecto voluptatem! Impedit odit laborum tempora necessitatibus? Deserunt delectus nemo dolores, nisi voluptas temporibus explicabo vitae praesentium id earum laudantium quis architecto veritatis sint ipsum. Voluptatum debitis qui natus libero quidem fugit modi exercitationem aspernatur mollitia, rem eos soluta ipsam vel? Dolore, nesciunt nulla dolores iure minima, vitae quasi esse animi aspernatur earum maxime repellendus at assumenda deleniti ipsum ullam incidunt veniam consequatur magni illo delectus fuga? Velit vel maiores animi mollitia! Nulla voluptatibus ratione, fugiat ea quisquam adipisci tempora nihil, provident illo iure blanditiis dolorum minus alias! Mollitia, natus! Impedit cupiditate pariatur odit debitis, sed facilis magni eum non maxime quae, velit dolores eligendi assumenda nihil voluptatum ipsum ipsam odio saepe quo? Hic ut, veritatis nihil placeat perferendis magni cum eos accusamus! In numquam assumenda autem unde libero!",
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
        

      <TodoList todos={states}/>
      </main>
     

      <section className="text-center mt-8 text-gray-400 font-semibold">Drag an drop to reorder list</section>
    </div>
    </>
  )
}

export default App