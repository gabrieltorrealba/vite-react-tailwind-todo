const TodoCreate = () => {
    return(
        <form 
        className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8 mb-8">
            <span 
            className="rounded-full border-2 h-5 w-5 inline-block" />
            <input 
            className="w-full text-gray-400 outline-none" 
            type="text"
            placeholder="Create a new todo..."/>
        </form>
    )
}

export default TodoCreate