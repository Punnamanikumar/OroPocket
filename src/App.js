import "./App.css";
import AllComponents from "./Components/AllComponents";
import { CategoryProvider } from "./Components/context/ContextApi";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <AllComponents />
      </CategoryProvider>
    </div>
  );
}

export default App;
