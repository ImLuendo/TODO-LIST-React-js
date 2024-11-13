
import './App.css';
// import { DashboardList } from './componets/DashbordList/DashbordList';
import { TodoForm } from './componets/TodoForm/TodoForm';

export function App() {
  return (
    <>
      <h1>TODO LIST APP</h1>
      <div className="App">
      
        <TodoForm />
        {/* <DashboardList /> */}
      </div>
    </>
    
  );
}


