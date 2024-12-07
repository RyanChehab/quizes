import Login from "./components/login";
import Signup from "./components/signup";
import Sheet from "./components/quiz_sheet";
import { MyProvider } from "./context/Auth";
import {QuestionProvider} from "./context/Quiz";
import  {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <QuestionProvider>
        <BrowserRouter>
        <MyProvider>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
                <Route path="quiz" element={<Sheet/>} />
            </Routes>
          </MyProvider>
        </BrowserRouter>
    </QuestionProvider>
  );
}

export default App;
