import AlertIcon from "./components/icons/AlertIcon"
import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8">
          <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
          <input className="w-full text-gray-400 outline-none" 
          type="text" placeholder="Create a new todo..."/>
        </form>
      </header>

      <main  className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md px-4 py-4 mb-1.5 shadow-md relative">
        <span className="absolute -top-1.5 -right-1.5" >
            <AlertIcon />
        </span>
          <article className="flex gap-4 border-b-gray-400">
          
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className=" text-gray-600 grow">Complete js curse</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>
        <div className="bg-white rounded-md px-4 py-4 mb-1.5 shadow-md relative">
        <span className="absolute -top-1.5 -right-1.5" >
            <AlertIcon />
        </span>
          <article className="flex gap-4 border-b-gray-400">
            <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
            <p className=" text-gray-600 grow">Other thing</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>
        
        <section className="bg-white rounded-md px-4 py-4 mb-1 shadow-md flex justify-between">
            <span className=" text-gray-400">5 items left</span>
            <button className=" text-gray-400">Clear Completed</button>
        </section>
    
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