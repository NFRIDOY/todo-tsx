import { TTodo } from "../../providers/ToDoProviders";

export default function AllToDo({ todos }: TTodo[]) {
    return (
        <div>
            {todos?.map((todo: TTodo) => (
                <div>{todo.title}</div>
            ))}
        </div>
    );
}
