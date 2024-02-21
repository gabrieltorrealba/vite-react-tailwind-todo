import CrossIcon from "../icons/CrossIcon"
import IconCheck from "../icons/IconCheck"

const TodoDescription = ({todo, onClose}) => {
    const {id, state, title,priority, description, createAt, completedAt} = todo
    return (
       
            <div className="fixed backdrop-blur-sm bg-black/40 min-h-full min-w-full top-0 left-0 z-10 flex grow ">
                <div className=" z-20 min-h-screen min-w-full top-0  flex justify-center items-center px-4">
                    <div className="bg-white rounded-md  shadow-md h-[25rem] container flex">
                        <div className="grow  border-r-gray-200 border-r-2 flex flex-col">
                        <section className="overflow-hidden flex gap-4 r-gray-200 border-b-2 px-4 py-4 flex-none">
                            <span 
                            className={`rounded-full border-2 h-5 w-5 flex justify-center items-center ${state === 'DONE' && 'bg-gradient-to-br from-blue-500 via-violet-400 to-purple-400'}`} >
                                {
                                    state === 'DONE' && <IconCheck />
                                }
                                </span>
                            <p className={`text-gray-600 grow ${state === 'DONE' && 'line-through'}`}>
                            {title}
                            </p>
                        </section>
                        <section className="grow p-4">description</section>
                        <section className="flex-none flex flex-col gap-4 py-4 r-gray-200 border-t-2">
                            <p className="text-xs px-4">{`Create: ${createAt}`}</p>
                            {
                                state === 'DONE' && <p className="text-xs px-4">{`Complete: ${completedAt}`}</p>
                            }
                        </section>
                        </div>
                        <div className="px-4 py-4 mb-1.5 flex flex-col gap-4">
                            <button 
                            onClick={onClose}
                            className="flex-none self-end">
                                <CrossIcon />
                            </button>
                            <p>
                                other things
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default TodoDescription