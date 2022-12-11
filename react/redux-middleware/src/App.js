import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
}

export default App;
