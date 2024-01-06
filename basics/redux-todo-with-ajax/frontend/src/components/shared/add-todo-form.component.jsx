import { useRef } from "react";
import store_todo from "../../store/todo/todo.store";
import { action_addTodo } from "../../store/todo/todo.action";
function AddTodoFormComponent() {
    const addTodoForm = useRef(null)

    const addTodo = (event) => {
        event.preventDefault();
        const form = addTodoForm.current;
        console.log(form['title'].value, form['important'].checked);
        // action_addTodo.payload = {
        //     title: form['title'].value,
        //     important: form['important'].checked
        // }
        store_todo.dispatch(action_addTodo({
            title: form['title'].value,
            important: form['important'].checked
        }));
    }
    return (
        <div>
            <h2>Add to do from here</h2>
            <form ref={addTodoForm}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Important?
                            </th>
                            <th>
                                Submit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" name={'title'}></input>
                            </td>
                            <td>
                                <input type="checkbox" name={'important'}></input>
                            </td>
                            <td>
                                <button onClick={addTodo} type="submit">Add to do</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default AddTodoFormComponent