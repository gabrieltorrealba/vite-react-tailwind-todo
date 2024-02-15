const TodoComputed = () => {
    return (
        <section 
        className="bg-white rounded-md px-4 py-4 mb-1 shadow-md flex justify-between">
            <span 
            className=" text-gray-400">
                5 items left
            </span>
            <button 
            className=" text-gray-400">
                Clear Completed
            </button>
        </section>
    )
}

export default TodoComputed