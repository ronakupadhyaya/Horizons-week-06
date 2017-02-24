let todos = [
  {
    id: 0,
    text: 'project proposal',
    completed: false
  },
  {
    id: 1,
    text: 'eat breakfast',
    completed: true
  },
  {
    id: 2,
    text: 'clean house',
    completed: false
  },
  {
    id: 3,
    text: 'laundry',
    completed: false
  },
  {
    id: 4,
    text: 'submit taxes',
    completed: true
  },
]

// Using map and filter and your knowledge of react
// create a list of the not completed todos from the array above
// it will display your list if have a correct solution
class Todos extends React.Component {
  render() {
    return (<ul>
      {todos.map(function(todo){
              return <li>{todo.text}</li>;
            })}
      </ul>);
  }
}
// pass todos as props below
ReactDOM.render(<Todos />, document.getElementById('root'))