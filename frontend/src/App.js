import Login from "./components/login";
import Signup from "./components/signup";
import Sheet from "./components/quiz_sheet";
import { MyProvider } from "./context/Auth";
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="quiz" element={<Sheet/>} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
