import { ReactNode, createContext, useReducer } from "react";

export const ToDoContext = createContext<{ todo: TTodo[], dispatch: React.Dispatch<TAction> } | undefined>(undefined);

export type TTodoProviders = {
    children: ReactNode;
};

export type TTodo = {
    id: string;
    title: string;
    isCompleted: boolean;
};

export type TAction = {
    type: string;
    payload: TTodo;
};

const initalState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload];

        default:
            return currentState;
    }
};

export default function ToDoProviders({ children }: TTodoProviders) {
    const [todo, dispatch] = useReducer(reducer, initalState);

    const value = {
        todo,
        dispatch
    };
    return (
        <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>
    );
}
