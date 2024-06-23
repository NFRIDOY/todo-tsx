import { FormEvent, useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProviders";

export default function AddTodo() {
    const { dispatch } = useContext(ToDoContext);
    const [task, setTask] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const todo = {
            id: Math.random().toString(36).substring(2, 7),
            title: task,
            isCompleted: false,
        };
        console.log(todo);
        dispatch({ type: "addTodo", payload: todo });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                name="title"
                id="title"
                className="input input-lg"
                placeholder="Title"
            />
            <button type="submit" className="btn btn-primary">
                ADD
            </button>
        </form>
    );
}
