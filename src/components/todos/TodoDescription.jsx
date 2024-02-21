import { useState } from "react";
import CrossIcon from "../icons/CrossIcon"
import IconCheck from "../icons/IconCheck"

const TodoDescription = ({todo, onClose}) => {
    const {id, state, title,priority, description, createAt, completedAt} = todo
    const [descriptionEdit, setIsDescriptionEdit] = useState(false);
    const [tempDescription, setTempDescription] = useState(description)

    const toggleDescription = () => {
        setIsDescriptionEdit(!descriptionEdit);
    }

    const  handleOnChange = (event) =>{
        setTempDescription(event.target.value)
        console.log(event.target.value);
    }
    const handleSubmit = () =>{
        console.log("HERE");
        setIsDescriptionEdit(!descriptionEdit);
    }
    return (
       
            <div className="fixed backdrop-blur-sm bg-black/40 min-h-full min-w-full top-0 left-0 z-10 flex grow ">
                <div className=" z-20 min-h-screen min-w-full top-0  flex justify-center items-center px-4">
                    <div className="bg-white rounded-md  shadow-md h-[25rem] container flex flex-col">
                        <div className=" grow flex">
                            <div className="grow flex flex-col">
                                <section className="overflow-hidden flex gap-4 r-gray-200  px-4 py-4 flex-none border-b-2">
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
                                <section className="grow p-4 flex flex-col">
                                   
                                    <div className="grow flex flex-col">  
                                        <label htmlFor="message">description:</label>
                                        {
                                            !descriptionEdit ?
                                                <div className="grow px-4 mt-2 border-[1px] rounded-md overscroll-y-auto overflow-auto h-10 cursor-pointer" onClick={toggleDescription}>
                                                    <p className="">{description}</p>
                                                </div> :
                                                <div>
                                                    <textarea 
                                                        value={tempDescription}
                                                        id="message" 
                                                        rows="4" 
                                                        className="block overscroll-y-auto overflow-auto px-4 py-2 h-52 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-md  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                                        onChange={(event) => {
                                                            handleOnChange(event); // Actualiza el estado con la nueva descripción
                                                            }
                                                        }
                                                    >
                                                    </textarea>
                                                    <div>
                                                        <button onClick={handleSubmit}>Guardar</button>
                                                        <button onClick={handleSubmit}>Cancelar</button>
                                                    </div>
                                                </div>
                                                
                                        }
                                        
                                        
                                    </div>
                                </section>
                            </div>
                            <div className="p-4 flex flex-col gap-4 border-l-2">
                                <button 
                                onClick={onClose}
                                className="flex-none self-end">
                                    <CrossIcon />
                                </button>
                                <div className="text-sm mt-4 flex flex-col gap-4">
                                    <p className="flex justify-between">
                                        state: <span className={`px-1 py-0.5 ml-1 rounded-sm font-semibold text-white ${state === 'WIP' ? 'bg-[#85B8FF]' : state === 'DONE' ? 'bg-[#4BCE97]' : 'bg-[#B6C2CF]'}`}>{state}</span> 
                                    </p>
                                    <p className="flex justify-between">
                                        priority: <span className={`px-1 py-0.5 ml-1 rounded-sm font-semibold text-white ${priority === 'high' ? 'bg-[#FF0000]' : priority === 'medium' ? 'bg-[#FFCC66]' : 'bg-[#317f43]'}`}>{priority}</span>
                                    </p>
                                </div> 
                            </div>
                        </div>
                        <section className="flex-none flex justify-between  gap-4 py-4 r-gray-200 border-t-2">
                            <p className="text-xs px-4">{`Create: ${createAt}`}</p>
                            {
                                state === 'DONE' && <p className="text-xs px-4">{`Complete: ${completedAt}`}</p>
                            }
                        </section>
                    </div>
                </div>
            </div>
        
    )
}

export default TodoDescription