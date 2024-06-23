import { FormEvent, useContext, useState } from "react";
import { ToDoContext } from "../../providers/ToDoProviders";

export default function AddTodo() {
    const { dispatch } = useContext(ToDoContext);
    const [addTodo, setAddTodo] = useState({
        title: "",
        isComplete: false,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(addTodo);
        dispatch({ type: "addTodo", payload: addTodo });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) =>
                    setAddTodo({ ...addTodo, title: e.target.value })
                }
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
