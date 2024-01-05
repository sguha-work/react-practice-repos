import { useEffect, useState } from "react";
import store_todo from "../../store/todo/todo.store";
import { action_fetchTodo } from "../../store/todo/todo.action";
function TodoTableComponent() {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        store_todo.dispatch(action_fetchTodo({page:0,limit:20}));
        store_todo.subscribe(() => {
            setTodoList(store_todo.getState()['TodoList']);
        });
    }, []);
    const deleteTodo = (title) => {
        // action_deleteTodo.title = title;
        // store_todo.dispatch(action_deleteTodo);
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
                                {item.important ? 'Yes' : 'No'}
                            </td>
                            <td>
                                <a href="#" onClick={deleteTodo.bind(this, item.title)}>Delete</a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TodoTableComponent