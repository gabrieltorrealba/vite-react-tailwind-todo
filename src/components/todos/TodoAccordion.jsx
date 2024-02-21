import { useState } from "react";
import IconChevronDown from "../icons/IconChevronDown";
import IconChevronUp from "../icons/IconChevronUp";
import TodoItem from "./TodoItem";

const TodoAccordion = ({state, todos, onClick}) => {
    const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

    return (
        <>
            <div className={`bg-white border border-gray-200 rounded-md shadow-sm mx-4 mt-8 `}>
                <div 
                className="flex justify-between cursor-pointer p-4 rounded-md border-gray-200 border-2"
                    onClick={toggleAccordion}>
                
                        <h3 className={`text-lg font-bold ${state === 'WIP' ? 'text-[#85B8FF]': state === 'DONE' ? 'text-[#4BCE97]' : 'text-[#B6C2CF]'}`}>{state}</h3>
                        {isOpen ? (
                        <IconChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                        <IconChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                    
                </div>
            </div>
            {isOpen && 
                    <div className="backdrop-blur-sm bg-white/30 mx-4 mt-1.5 border border-gray-200 rounded-md shadow-sm">
                        {todos.map((todo) =>(
                        <TodoItem key={todo.id} todo={todo} onClick={()=>onClick(todo)}/>
                        ))}
                    </div>
                    
                }
        </>
    )
}
export default TodoAccordion