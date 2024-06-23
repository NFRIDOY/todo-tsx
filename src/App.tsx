import "./App.css";
import ToDo from "./apps/ToDo/ToDo";
import ToDoProviders from "./providers/ToDoProviders";

function App() {
    return (
        <>
            <ToDoProviders>
                <ToDo />
            </ToDoProviders>
        </>
    );
}

export default App;
