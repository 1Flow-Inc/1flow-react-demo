import logo from "./oneflow-logo.png";
import "./App.css";

import { oneFlowInit, _1flow } from "javascript-1flow-sdk";
import { useEffect } from "react";
function App() {
  // Init 1Flow SDk
  useEffect(() => {
    oneFlowInit("OneFlow API KEY");
  }, []);

  // Log Survey Event
  const openSurvey = () => {
    _1flow.logEvent("event_name", { email: "test@1flow.com", test: "test" });
  };

  // Log Survey Event
  const LogUser = () => {
    _1flow.logUser("user_id", { email: "test@1flow.com", test: "test" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="buttons">
          <button
            className="open-survey-button"
            onClick={() => openSurvey()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Survey
          </button>

          <button
            className="open-survey-button"
            onClick={() => LogUser()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Log User
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
