import AddTodoFormComponent from "../shared/add-todo-form.component"
import TodoTableComponent from "../shared/todo-table.component"
function AddTodoPageComponent() {
  return (
    <div>
        <h1> This is add to do page </h1>
        <AddTodoFormComponent></AddTodoFormComponent>
        <TodoTableComponent></TodoTableComponent>
    </div>
  )
}

export default AddTodoPageComponent