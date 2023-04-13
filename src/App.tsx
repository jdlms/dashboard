import { Route, Routes } from "react-router-dom";
import { AspectScores } from "./pages/AspectScores";
import { Benchmark } from "./pages/Benchmark";
import { Layout } from "./components/Layout";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AspectScores />} />
        <Route path="benchmark" element={<Benchmark />} />
      </Route>
    </Routes>
  );
}

export default App;
