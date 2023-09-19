import {screen, render} from '@testing-library/react';
import TaskComponent from '../Task.component';
test('testing task',()=>{
    const task = {index:1, task:'do something'};
    render(<TaskComponent index={task.index} task={task.task}></TaskComponent>);
    const TaskComponent_dom = screen.getByTestId(`${task.index}_test`);
    expect(TaskComponent_dom).toBeInTheDocument();
    expect(TaskComponent_dom).toHaveTextContent(task.task);
});