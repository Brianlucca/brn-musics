import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/home"
import './reset.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/brn-musics" element={<Home />} />
          {/* <Route path="Music" element={<Music />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);