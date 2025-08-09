const List = ({ todos, deleteTodo, checkedHandler }) => {
    return (
        <>
            {
                todos.map((el) => {
                    return (
                        <li>
                            <div className="todo-card">
                                <span className="title" style={{ 'text-decoration': el.completed ? 'line-through' : '' }}>{el.text}</span>
                                <input className="input" type="checkbox" checked={el.completed} onChange={() => checkedHandler(el.id)} />
                                <button className="button" onClick={() => deleteTodo(el.id)}>Delete</button>
                            </div>


                            {/* <div>{String(el.completed)}</div> */}
                        </li>

                    )
                })
            }
        </>
    )
}

export default List;