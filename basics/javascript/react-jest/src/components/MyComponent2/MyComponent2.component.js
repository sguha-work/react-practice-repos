import TaskComponent from './../Task/Task.component';
function MyComponent2(props) {
    return (
        <div>
            This is MyComponent2, here you can view task
            <ul>
                {props.taskList.map((task, index) => (<TaskComponent index={index} task={task}></TaskComponent>))}
            </ul>
        </div>
    );
}
export default MyComponent2;