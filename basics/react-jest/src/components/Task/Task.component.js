export default function TaskComponent({index, task}) {
    return (
        <li data-testid={`${index}_test`} index={index}>{task}</li>
    );
}