import AlertIcon from "../icons/AlertIcon"
import CrossIcon from "../icons/CrossIcon"
import IconCheck from "../icons/IconCheck"

const TodoItem = ({todo}) => {
    const {id, state, title,priority, description, createAt, completedAt} = todo
    const handleClick = () => {
        console.log('El div ha sido clickeado');
    }

    return (
        <div className="bg-white rounded-md px-4 py-4 mb-1.5 shadow-md relative cursor-pointer" onClick={handleClick}>
            <div className={`absolute -top-1.5 left-0 text-sm  px-2 rounded-md text-white font-semibold ${state === 'WIP' ? 'bg-[#85B8FF]': state === 'DONE' ? 'bg-[#4BCE97]' : 'bg-[#B6C2CF]'}`}>
                <span >{state}</span>
            </div>
            <span className="absolute -top-1.5 -right-1.5" >
                <AlertIcon fill={`${priority === 'high' ? '#FF0000' : priority === 'medium' ? '#FFCC66' : '#317f43'}`}/>
            </span>
            <article className="flex gap-4 border-b-gray-400">
                <span className="rounded-full border-2 h-5 w-5 inline-block">
                    {/* {
                        state === 'DONE' && <IconCheck />
                    } */}
                </span>
                <p className={`text-gray-600 grow ${state === 'DONE' && 'line-through'}`}>{title}</p>
                <button className="flex-none">
                    <CrossIcon />
                </button>
            </article>
            <span className="absolute text-xs text-gray-400">{`Create: ${createAt}`}</span>
            <span className="absolute right-4 text-xs text-gray-400">{state === 'DONE' && `Complete: ${completedAt}`}</span>
        </div>
    )
}

export default TodoItem