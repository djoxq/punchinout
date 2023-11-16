import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <div className="App">
          <div className="timer_wrapper">
            <span>Timer</span>
          </div>
          <div className="action-buttons_wrapper">
            <button id="start">Start</button>
            <button id="stop">Stop</button>
          </div>
          <div className="monthly-report_wrapper">
            <Link className="report-link" to="/reports">
              Monthly Report
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
