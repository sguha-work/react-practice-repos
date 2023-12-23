import { action_addTodo, action_deleteTodo } from "./todo.action";
import { initialTodoState } from "./todo.state";

export function reducer_todo(state = initialTodoState, action) {
    switch (action.type) {
        case action_addTodo.type: {
            console.log('payload',action.payload);
            return {
                ...state,
                TodoList: state.TodoList.concat(action.payload)
            };
        }
        case action_deleteTodo.type: {
            let todoList = state.TodoList.filter((item) => item.title != action.title);
            return {
                ...state,
                TodoList: todoList
            }
        }

    }
}