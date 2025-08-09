import { useState } from "react";
import List from "./list"
import { v1 as uuidv1, v1 } from "uuid";

type Todo = {
    text: string;
    completed: boolean;
    id: string;
};

const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        if (!todo) return;
        for (const el of todos) {
            if (el.text == todo) {
                alert("duplicate!")
                return;
            }
        }
        const copyTodos: Todo[] = [...todos];
        copyTodos.push({
            text: todo,
            completed: false,
            id: v1(),
        });
        setTodos(copyTodos);
        setTodo("")
    }

    const deleteTodo = (id) => {
        const copyTodos: Todo[] = [...todos].filter((el) => {
            return el.id !== id;
        });
        setTodos(copyTodos)
    }

    const checkedHandler = (id) => {
        const copyTodos: Todo[] = [...todos].map((el) => {
            if (el.id == id) {
                el.completed = !el.completed;
                return el;
            } else {
                return el;
            }
        });
        setTodos(copyTodos)
    }

    return (
        <div>
            <div className="input-section"><span className="title">Enter Todo</span>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                <ul>
                    <List deleteTodo={deleteTodo} checkedHandler={checkedHandler} todos={todos} />

                </ul>
            </div>
        </div>
    );
}

export default TodoList;