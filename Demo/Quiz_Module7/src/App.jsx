import './App.css'
import Header from './components/Header'
import TodoList from './components/ToDoList'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header title={"Todo List"}/>
      <TodoList/>        
    </>
  )
}

export default App
