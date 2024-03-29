const TodoComputed = ({items}) => {
    return (
        <div className="px-4 mt-8">
            <section 
            className="bg-white rounded-md px-4 py-4 mb-1 shadow-md flex justify-between">
                <span 
                className=" text-gray-400">
                    {items} items left
                </span>
                <button 
                className=" text-gray-400">
                    Clear Completed
                </button>
            </section>
        </div>
    )
}

export default TodoComputed