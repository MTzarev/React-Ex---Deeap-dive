import uniqid from 'uniqid'
function TodoList(){
let todos = [
    {id: 1, text: 'Clean my Room'},
    {id: 2, text: 'Wash the dishes'},
    {id: 3, text: 'Go to the gum'},
];
    return(
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    
);

};
export default TodoList;