import { ToDo } from "./components/todo/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App bg-dark">
      <h1 className="text-light"> ToDo</h1>
      <ToDo />
    </div>
  );
}

export default App;
