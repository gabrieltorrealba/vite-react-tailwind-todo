import { useState } from "react"
import Swal from 'sweetalert2'

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState('');
  
    const handlerSubmit = async (e) => {
      e.preventDefault();
  
      if (!title.trim()) {
        setTitle(''); 
        return;
      }
  
      const { value } = await Swal.fire({
        title: 'Select Priority:',
        input: 'radio',
        inputOptions: {
          high: 'high',
          medium: 'medium',
          low: 'low',
        },
        customClass: {
          confirmButton: 'swal2-confirm-button', 
        },
      });
  
      if (value) { 
        createTodo(title, value);
        setTitle('');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your todo has been saved",
            showConfirmButton: false,
            timer: 1500
          })
      } else { 
        Swal.fire({
          title: 'Please select a priority.',
          text: 'Todo cannot be saved without a priority.',
          icon: 'warning',
        });
      }
    };

    return(
        <div className="px-4">
            <form onSubmit={handlerSubmit}
            className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8 mb-8">
                <span 
                className="rounded-full border-2 h-5 w-5 inline-block" />
                <input 
                className="w-full text-gray-400 outline-none" 
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            </form>
        </div>
    )
}

export default TodoCreate