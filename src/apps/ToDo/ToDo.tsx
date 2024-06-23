import { useContext } from "react";
import { TTodo, ToDoContext } from "../../providers/ToDoProviders";
import AddTodo from "../../components/AddTodo/AddTodo";
import AllToDo from "../../components/AllToDo/AllToDo";

export default function ToDo() {
    const { todo, dispatch } = useContext(ToDoContext);
    return (
        <>
            <h1 className="animate-bounce text-2xl">ToDo {todo.length}</h1>
            <div>
                <AddTodo />
            </div>
            <div>
                <h1>All Todos</h1>
                <div>
                    {/* <AllToDo todos={todo} /> */}
                    {todo?.map((todo: TTodo) => (
                        <div>{todo.title}</div>
                    ))}
                </div>
            </div>
        </>
    );
}
