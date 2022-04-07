
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {FormComponent} from "./components/From/FormComponent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="invitations/:newToken" />} />
        <Route path="invitations/:newToken" element={<FormComponent />} />
      </Routes>   
    </BrowserRouter> 
  );
}

export default App;
