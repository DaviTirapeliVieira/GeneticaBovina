import "./App.css";
import * as ReactRouterDOM from "react-router-dom";
import Genetica from "./pages/Genetica.js";

function App() {
  return (
    <ReactRouterDOM.BrowserRouter>
      <div className="container">
        <ReactRouterDOM.Routes>
          <ReactRouterDOM.Route path="/" element={<Genetica />} />
        </ReactRouterDOM.Routes>
      </div>
    </ReactRouterDOM.BrowserRouter>
  );
}

export default App;
