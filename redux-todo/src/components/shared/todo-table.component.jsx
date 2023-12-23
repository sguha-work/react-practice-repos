import { useEffect, useState } from "react";
import store_todo from "../../store/todo/todo.store";
function TodoTableComponent() {
    const [todoList, setTodoLost] = useState([]);
    useEffect(() => {
        store_todo.subscribe(() => {
            setTodoLost(store_todo.getState()['TodoList']);
        });
    }, []);
    const deleteTodo = ()=>{

    }
    return (
        <div>
            <h2>This is the added to do list</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Todo title
                        </th>
                        <th>
                            Is important?
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                {item.important? 'Yes': 'No'}
                            </td>
                            <td>
                                <a href="#" onClick={deleteTodo}>Delete</a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TodoTableComponent