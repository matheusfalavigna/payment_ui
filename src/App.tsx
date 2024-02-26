import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Dashboard />
      </BrowserRouter>
    </>
  );
}
